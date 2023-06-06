"use client";

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import VerifyFail from "../../components/VerifyFail";
import VerifySuccess from "../../components/VerifySuccess";
import { UserType } from "../../types";

interface Props {
  token: string;
  user: UserType | null;
}

const VerifyComponent: React.FC<Props> = ({ token, user }) => {
  const toast = useToast();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      (async () => {
        await axios
          .post("/api/verify", { token })
          .then(() => {
            setResult(true);
          })
          .catch((callback) => {
            setError(callback.response.data.error);
          });
      })();
    }
  }, [token]);

  if (!result) {
    <ContainerApp>
      <></>
    </ContainerApp>;
  }

  return (
    <ContainerApp>
      {result ? <VerifySuccess /> : <VerifyFail error={error} />}
    </ContainerApp>
  );
};

export default VerifyComponent;

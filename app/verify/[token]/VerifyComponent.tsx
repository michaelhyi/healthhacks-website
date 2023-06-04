"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import VerifyFail from "../../components/VerifyFail";
import VerifySuccess from "../../components/VerifySuccess";
import { UserType } from "../../types";
import { useToast } from "@chakra-ui/react";

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
    if (user) {
      toast({
        title: "User already signed in!",
        duration: 3000,
        isClosable: true,
      });
      router.push("/");
    }
  }, [toast, router]);

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

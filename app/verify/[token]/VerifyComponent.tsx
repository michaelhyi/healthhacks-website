"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import VerifyFail from "../../components/VerifyFail";
import VerifySuccess from "../../components/VerifySuccess";

interface Props {
  token: string;
}

const VerifyComponent: React.FC<Props> = ({ token }) => {
  const params = useSearchParams();
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      (async () => {
        await axios
          .post("/api/verify", { token })
          .then((callback) => {
            setResult(true);
          })
          .catch((callback) => {
            setError(callback.response.data.error);
          });
      })();
    }
  }, [params]);

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

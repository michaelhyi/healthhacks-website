"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import VerifyFail from "../../components/VerifyFail";
import VerifySuccess from "../../components/VerifySuccess";

interface Props {
  token: string;
}

const VerifyComponent: React.FC<Props> = ({ token }) => {
  const [fetching, setFetching] = useState(true);
  const [result, setResult] = useState<any>(undefined);
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
            setResult(false);
            setError(callback.response.data.error);
          })
          .finally(() => setFetching(false));
      })();
    }
  }, [token]);

  if (fetching) {
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

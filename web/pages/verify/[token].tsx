import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import VerifyFail from "../../components/VerifyFail";
import VerifySuccess from "../../components/VerifySuccess";
import { useVerifyUserMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Verify = () => {
  const router = useRouter();
  const [, verifyUser] = useVerifyUserMutation();
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [user, setUser] = useState<null | {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    verified: boolean;
  }>(null);

  useEffect(() => {
    const token = router.query.token;

    if (token) {
      (async () => {
        try {
          const response = await verifyUser({
            token: router.query.token as string,
          });
          console.log(response);

          setResult(response.data?.verifyUser.success);
          setUser(response.data?.verifyUser.user!);

          if (!response.data?.verifyUser.success)
            setError(response.data!.verifyUser.error!);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [router.query]);

  if (!result) {
    <ContainerApp>
      <></>
    </ContainerApp>;
  }

  return (
    <ContainerApp>
      {result ? (
        <VerifySuccess user={user} />
      ) : (
        <VerifyFail user={user} error={error} />
      )}
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient)(Verify);

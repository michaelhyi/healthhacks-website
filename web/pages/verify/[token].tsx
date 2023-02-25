import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import { useVerifyUserMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Verify = () => {
  const router = useRouter();
  const [, verifyUser] = useVerifyUserMutation();
  const [result, setResult] = useState<any>(null);

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
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [router.query]);

  if (!result) {
    <ContainerApp>
      <div className="text-white">loading...</div>
    </ContainerApp>;
  }

  return (
    <ContainerApp>
      <div className="text-white">{result && result.toString()}</div>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient)(Verify);

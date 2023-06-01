import readUser from "../../actions/readUser";
import VerifyComponent from "./VerifyComponent";

interface Params {
  token: string;
}

const Verify = async ({ params }: { params: Params }) => {
  const user = await readUser();

  return <VerifyComponent token={params.token} user={user} />;
};

export default Verify;

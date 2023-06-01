import readUser from "../actions/readUser";
import VerifyComponent from "./VerifyComponent";

const Verify = async () => {
  const user = await readUser();

  return <VerifyComponent user={user} />;
};

export default Verify;

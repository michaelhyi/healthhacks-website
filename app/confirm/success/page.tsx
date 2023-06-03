import readUser from "../../actions/readUser";
import SuccessComponent from "./SuccessComponent";

const Success = async () => {
  const user = await readUser();

  return <SuccessComponent user={user} />;
};

export default Success;

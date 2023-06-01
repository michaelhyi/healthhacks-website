import readUser from "../actions/readUser";
import ForgotPasswordComponent from "./ForgotPasswordComponent";

const ForgotPassword = async () => {
  const user = await readUser();

  return <ForgotPasswordComponent user={user} />;
};

export default ForgotPassword;

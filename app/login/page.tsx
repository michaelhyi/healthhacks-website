import readUser from "../actions/readUser";
import LoginComponent from "./Component";

const Login = async () => {
  const user = await readUser();

  return <LoginComponent user={user} />;
};

export default Login;

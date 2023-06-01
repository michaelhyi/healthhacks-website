import readUser from "../actions/readUser";
import RegisterComponent from "./Component";

const Register = async () => {
  const user = await readUser();

  return <RegisterComponent user={user} />;
};

export default Register;

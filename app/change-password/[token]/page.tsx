import readTokenValidity from "../../actions/readTokenValidity";
import readUser from "../../actions/readUser";
import ChangePasswordComponent from "./ChangePasswordComponent";

interface Params {
  token?: string;
}

const ChangePassword = async ({ params }: { params: Params }) => {
  const user = await readUser();
  const tokenValidity = await readTokenValidity(params);

  return (
    <ChangePasswordComponent
      user={user}
      tokenValidity={tokenValidity}
      token={params.token}
    />
  );
};

export default ChangePassword;

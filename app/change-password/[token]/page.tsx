import readTokenValidity from "../../actions/readTokenValidity";
import ChangePasswordComponent from "./ChangePasswordComponent";

interface Params {
  token?: string;
}

const ChangePassword = async ({ params }: { params: Params }) => {
  const tokenValidity = await readTokenValidity(params);

  return (
    <ChangePasswordComponent
      tokenValidity={tokenValidity}
      token={params.token}
    />
  );
};

export default ChangePassword;

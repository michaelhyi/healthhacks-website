import readApplicationStatusById from "../actions/readApplicationStatusById";
import readUser from "../actions/readUser";
import ConfirmComponent from "./ConfirmComponent";
import ForbiddenComponent from "./ForbiddenComponent";

const Confirm = async () => {
  const user = await readUser();
  const whitelisted = await readApplicationStatusById({ userId: user?.id });

  if (!whitelisted) {
    return <ForbiddenComponent />;
  }

  return <ConfirmComponent user={user} />;
};

export default Confirm;

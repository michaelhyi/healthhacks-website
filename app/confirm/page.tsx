import readApplicationStatusById from "../actions/readApplicationStatusById";
import readConfirmationById from "../actions/readConfirmationById";
import readUser from "../actions/readUser";
import ConfirmComponent from "./ConfirmComponent";
import ForbiddenComponent from "./ForbiddenComponent";

const Confirm = async () => {
  const user = await readUser();
  const whitelisted = await readApplicationStatusById({ userId: user?.id });
  const confirmation = await readConfirmationById({ userId: user?.id });

  if (!whitelisted) {
    return <ForbiddenComponent />;
  }

  return <ConfirmComponent user={user} confirmation={confirmation} />;
};

export default Confirm;

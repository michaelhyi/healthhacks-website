import readAmbassador from "../actions/readAmbassador";
import readApplicationStatusById from "../actions/readApplicationStatusById";
import readConfirmationById from "../actions/readConfirmationById";
import readUser from "../actions/readUser";
import ConfirmComponent from "./ConfirmComponent";
import ForbiddenComponent from "./ForbiddenComponent";

const Confirm = async () => {
  const user = await readUser();
  let whitelisted = false;
  let confirmation = null;
  let ambassador = false;

  if (user) {
    whitelisted = await readApplicationStatusById({ userId: user.id });
    confirmation = await readConfirmationById({ userId: user.id });
    ambassador = await readAmbassador({ userId: user.id });
  }

  if (!whitelisted) {
    return <ForbiddenComponent />;
  }

  return (
    <ConfirmComponent
      user={user}
      confirmation={confirmation}
      ambassador={ambassador}
    />
  );
};

export default Confirm;

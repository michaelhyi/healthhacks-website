import readApplicationById from "../actions/readApplicationById";
import readUser from "../actions/readUser";
import ApplyComponent from "./ApplyComponent";

const Apply = async () => {
  const user = await readUser();
  const application = await readApplicationById({ userId: user?.id });

  return <ApplyComponent user={user} application={application} />;
};

export default Apply;

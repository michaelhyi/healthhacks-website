import readApplicationById from "../actions/readApplicationById";
import readUser from "../actions/readUser";
import ComingSoonComponent from "./ComingSoonComponent";

const Apply = async () => {
  const user = await readUser();
  const application = await readApplicationById({ userId: user?.id });

  return <ComingSoonComponent />;
  // return <ApplyComponent user={user} application={application} />;
};

export default Apply;

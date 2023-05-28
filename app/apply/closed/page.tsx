import readUser from "../../actions/readUser";
import ClosedComponent from "./ClosedComponent";

const Closed = async () => {
  const user = await readUser();

  return <ClosedComponent user={user} />;
};

export default Closed;

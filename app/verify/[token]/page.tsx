import VerifyComponent from "./VerifyComponent";

interface Params {
  token: string;
}

const Verify = async ({ params }: { params: Params }) => {
  return <VerifyComponent token={params.token} />;
};

export default Verify;

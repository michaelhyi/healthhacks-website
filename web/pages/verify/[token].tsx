import { useReadUserQuery } from "../../generated/graphql";

const Verify = () => {
  const [{ data, fetching }] = useReadUserQuery({variables: {
    id: 
  }});
};

export default Verify;

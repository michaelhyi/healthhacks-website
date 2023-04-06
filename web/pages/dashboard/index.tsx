import { useEffect, useState } from "react";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import ContainerApp from "../../components/ContainerApp";
import Footer from "../../components/dashboard/FooterDash";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) setUser(JSON.parse(response));
      setFetching(false);
    })();
  }, []);

  if (fetching)
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );

  return (
    <NavbarContainer>
      <div className="flex md:flex-row flex-col">

      </div>
      <Footer />
    </NavbarContainer>
  );
}

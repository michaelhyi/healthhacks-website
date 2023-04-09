import React, { useEffect, useState } from "react";
import ProfileGrid from "../../components/ProfileGrid";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import { useRouter } from "next/router";
import ContainerApp from "../../components/ContainerApp";

const App: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) {
        setUser(JSON.parse(response));
      } else {
        router.push("/login");
      }
      setFetching(false);
    })();
  }, []);

  if (fetching) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }

  return (
    <NavbarContainer>
      <ProfileGrid />
    </NavbarContainer>
  );
};

export default App;

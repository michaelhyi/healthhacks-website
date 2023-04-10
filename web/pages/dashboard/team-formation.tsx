import React, { useEffect, useState } from "react";
import ProfileGrid from "../../components/ProfileGrid";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import { useRouter } from "next/router";
import ContainerApp from "../../components/ContainerApp";
import { readParticipants } from "../../utils/helpers";
import TeamProfile from "../../components/TeamProfile";

const App: React.FC = () => {
  const router = useRouter();
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (!response) {
        router.push("/login");
      } else {
        // const user = JSON.parse(response);
        const user = {
          email: "adamzhao@stanford.edu",
          track: "Aging",
        };
        const rows = await readParticipants();
        const track = rows!.find((v) => v._rawData[0] === user.email);
        const data = rows!.filter((v) => v._rawData[3] === track!._rawData[3]);
        setFetching(false);
      }
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
      <div className="grid grid-cols-2 gap-12">
        <TeamProfile
          firstName="Michael"
          lastName="Yi"
          email="michaelyi2004@gmail.com"
        />
      </div>
    </NavbarContainer>
  );
};

export default App;

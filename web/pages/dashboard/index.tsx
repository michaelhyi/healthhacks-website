import { useEffect, useState } from "react";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import ContainerApp from "../../components/ContainerApp";
import Footer from "../../components/dashboard/FooterDash";
import EventCountdown from "../../components/dashboard/home/EventCountdown";
import EventHelp from "../../components/dashboard/home/EventHelp";
import TitleDash from "../../components/dashboard/TitleDash";

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
      <div className="m-16">
        <TitleDash title="Participant Dashboard" />
        <div className="flex flex-col md:flex-row h-[50vh]">
          <div className="w-1/2"></div>
          <div className="flex flex-col w-1/2 gap-y-4">
            <div className="">
              <EventCountdown />
            </div>
            <div className="h-1/2">
              <EventHelp />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </NavbarContainer>
  );
}

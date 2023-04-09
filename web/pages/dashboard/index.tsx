import { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import TitleDash from "../../components/dashboard/TitleDash";
import EventCountdown from "../../components/dashboard/home/EventCountdown";
import EventHelp from "../../components/dashboard/home/EventHelp";
import Scheduler from "../../components/dashboard/home/EventSchedule";
import { useRouter } from "next/router";

export default function Dashboard() {
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

  if (fetching)
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );

  return (
    <NavbarContainer>
      <div className="m-8 lg:m-12 xl:m-16">
        <TitleDash title="Participant Dashboard" />
        <div className="flex flex-col lg:flex-row h-full gap-x-8 gap-y-8">
          <div className="w-full lg:w-1/2 h-[60vh]">
            <Scheduler />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 gap-y-8">
            <div className="">
              <EventCountdown />
            </div>
            <div className="h-1/2">
              <EventHelp />
            </div>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

import { useEffect, useState } from "react";
import Container from "../components/Container";
import ContainerApp from "../components/ContainerApp";
import Days from "../components/Days";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Statistics from "../components/Statistics";
import Sponsors from "@/components/Sponsors2023";

export default function Home() {
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
    <Container>
      <Head user={user} />
      <Statistics />
      <Sponsors />
      <Days />
      <Footer />
    </Container>
  );
}

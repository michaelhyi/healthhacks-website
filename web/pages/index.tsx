import { useEffect, useState } from "react";
import Container from "../components/Container";
import ContainerApp from "../components/ContainerApp";
import Days from "../components/Days";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Statistics from "../components/Statistics";
import Purchased from "../components/Purchased";

import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  const { purchased } = router.query;

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
  
  if (!router.isReady) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }
  
  return (
    <Container>
      { purchased == 'true' ? ( <Purchased/>) : null}
      <Head user={user}/>
      <Statistics />
      <Days />
      <Footer />
    </Container>
  );
}

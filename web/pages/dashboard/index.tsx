import { useEffect, useState } from "react";
import Container from "../../components/Container";
import ContainerApp from "../../components/ContainerApp";
import Footer from "../../components/Footer";
import Head from "../../components/Head";

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
    <Container>
      <Head user={user} />
      <Footer />
    </Container>
  );
}

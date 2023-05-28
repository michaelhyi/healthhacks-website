import getUser from "./actions/getUser";
import Container from "./components/Container";
import Days from "./components/Days";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Sponsors from "./components/Sponsors23";
import Statistics from "./components/Statistics";

export default async function Home() {
  const user = await getUser();

  return (
    <Container user={user}>
      <Head />
      <Statistics />
      <Sponsors />
      <Days />
      <Footer />
    </Container>
  );
}

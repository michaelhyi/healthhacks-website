import readUser from "./actions/readUser";
import Container from "./components/Container";
import Days from "./components/Days";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Sponsors from "./components/Sponsors23";
import Statistics from "./components/Statistics";

export default async function Home() {
  const user = await readUser();

  return (
    <Container user={user}>
      <Head user={user} />
      <Statistics />
      <Sponsors />
      <Days />
      <Footer />
    </Container>
  );
}

import readApplicationStatusById from "./actions/readApplicationStatusById";
import readUser from "./actions/readUser";
import Container from "./components/Container";
import Days from "./components/Days";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Sponsors from "./components/Sponsors23";
import Statistics from "./components/Statistics";

export default async function Home() {
  const user = await readUser();
  let whitelisted = null;

  if (user) whitelisted = await readApplicationStatusById({ userId: user.id });

  return (
    <Container user={user} whitelisted={whitelisted}>
      <Head user={user} whitelisted={whitelisted} />
      <Statistics />
      <Sponsors />
      <Days />
      <Footer />
    </Container>
  );
}

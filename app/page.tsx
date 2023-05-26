import Container from "./components/Container";
import Days from "./components/Days";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Sponsors from "./components/Sponsors23";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <Container>
      <Head />
      <Statistics />
      <Sponsors />
      <Days />
      <Footer />
    </Container>
  );
}

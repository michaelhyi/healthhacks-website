import Container from "../components/Container";
import Days from "../components/Days";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <Container>
      <Head />
      <Statistics />
      <Days />
      <Footer />
    </Container>
  );
}

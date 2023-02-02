import Container from "../components/Container";
import Footer from "../components/Footer";
import Headquarters from "../components/Headquarters";
import Mission from "../components/Mission";
import Sponsors from "../components/Sponsors";
import Values from "../components/Values";

const About = () => {
  return (
    <Container>
      <Mission />
      <Headquarters />
      <Sponsors />
      <Values />
      <Footer />
    </Container>
  );
};

export default About;

import readApplicationStatusById from "../actions/readApplicationStatusById";
import readUser from "../actions/readUser";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Headquarters from "../components/Headquarters";
import Mission from "../components/Mission";
import Sponsors from "../components/Sponsors";

const About = async () => {
  const user = await readUser();
  const whitelisted = await readApplicationStatusById({ userId: user?.id });

  return (
    <Container user={user} whitelisted={whitelisted}>
      <Mission />
      <Headquarters />
      <Sponsors />
      <Footer />
    </Container>
  );
};

export default About;

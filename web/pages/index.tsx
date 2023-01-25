import Container from "../components/Container";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <Container>
      <Head />
      <Statistics />
      <div className="flex flex-col space-y-16 justify-center items-center pt-16">
        <div className="font-semibold text-xl opacity-75">{`EXPLORE THE HEALTH{HACKS} WAY`}</div>
        <div className="flex space-x-48">
          <img src="/DAY 1.GIF" className="w-[10vw]" />
          <div className="flex flex-col">
            <div className="font-semibold text-3xl">
              Day 1: Experience the power of collaboration.
            </div>
            <div className="font-medium opacity-75 text-xl w-[20vw]">
              Meet and brainstorm with a diverse group of creators and listen to
              inspiring keynote speeches. Connect with others and share ideas to
              make a positive impact in the healthcare industry.
            </div>
          </div>
        </div>
        <div className="flex space-x-48">
          <img src="/DAY 2.GIF" className="w-[10vw]" />
          <div className="flex flex-col">
            <div className="font-semibold text-3xl">
              Day 2: Enhance your knowledge and skills.
            </div>
            <div className="font-medium opacity-75 text-xl w-[20vw]">
              Continue to work on your projects and listen to informative
              workshops led by industry experts. Learn and grow in the
              healthcare industry and take your skills to the next level.
            </div>
          </div>
        </div>
        <div className="flex space-x-48">
          <img src="/DAY 3.GIF" className="w-[10vw]" />
          <div className="flex flex-col">
            <div className="font-semibold text-3xl">
              Day 3: Pitch your ideas to the world.
            </div>
            <div className="font-medium opacity-75 text-xl w-[20vw]">
              Pitch your projects to a panel of judges and have the chance to
              win prizes. Showcase your ideas and make a difference in the world
              of healthcare.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

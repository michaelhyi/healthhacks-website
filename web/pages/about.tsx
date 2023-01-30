import Container from "../components/Container";
//@ts-ignore
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col items-center text-center">
        <Fade up delay={1000} distance="24px">
          <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
            Our Mission
          </div>
        </Fade>
        <Fade up delay={1100} distance="24px">
          <div className="pt-6 font-bold text-5xl w-[50vw]">
            We accelerate the world’s most empathy-driven healthcare innovations
            by connecting and supporting diverse creators.
          </div>
        </Fade>
        <Fade up delay={1200} distance="24px">
          <div className="pt-6 opacity-50 text-lg w-[35vw]">
            Health is the quintessential human experience for all. Despite its
            importance, medical innovations have slowed while the world around
            us has and will continue to accelerate to new heights. We need a
            disruption in this heavily-guarded field to inspire hope in
            humanity.
          </div>
        </Fade>
        <Fade up delay={1500} distance="24px">
          <div className="pt-8 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#00B59D] to-[#CB47F4] ">{`health{hacks} is the revolution.`}</div>
        </Fade>
        <Fade delay={2000}>
          <div className="flex flex-col items-center justify-center text-center border-y-[0.5px] border-white border-opacity-25 mt-16 py-16 w-full ">
            <div className="font-semibold text-3xl opacity-50">
              Headquarters:
            </div>
            <div className="mt-4 font-semibold text-5xl">
              Stanford University
            </div>
            <div className="flex items-center space-x-16 mt-12 ">
              <div className="flex flex-col space-y-2 text-center">
                <div className="font-semibold text-6xl">38</div>
                <div className="font-medium opacity-50 text-lg">
                  TEAM MEMBERS
                </div>
              </div>
              <div className="border-l-2 border-white h-[125px] opacity-50" />
              <div className="flex flex-col space-y-2 text-center">
                <div className="font-semibold text-6xl">2020</div>
                <div className="font-medium opacity-50 text-lg">FOUNDED</div>
              </div>
            </div>
          </div>
        </Fade>
        <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          We Have Been Backed By
        </div>
        <div className="flex space-x-4 items-center mt-6">
          <img
            src="/logos/polygon.svg"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/clipboard-health.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/fund-global.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/vital.svg"
            className="h-[5vh] filter brightness-0 invert"
          />
        </div>

        <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          We Believe In
        </div>
        <div className="flex flex-col mt-8 space-y-4 text-2xl opacity-75">
          <div>(1) We are all different and that’s why we need you.</div>
          <div>
            (2) We aim for first class performance and only in a first class
            way.
          </div>
          <div>
            (3) We build durable relationships that last the test of time.
          </div>
          <div>(4) We push the team forward and dream big together.</div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default About;

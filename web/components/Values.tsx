// @ts-ignore
import Fade from "react-reveal/Fade";

const Values = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Fade up delay={500} distance="24px">
        <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4]">
          We Believe In
        </div>
      </Fade>
      <div className="flex flex-col mt-8 space-y-4 text-2xl opacity-75 text-white text-center">
        <Fade up delay={600} distance="24px">
          <div>(1) We are all different and that’s why we need you.</div>
        </Fade>
        <Fade up delay={700} distance="24px">
          <div>
            (2) We aim for first class performance and only in a first class
            way.
          </div>
        </Fade>
        <Fade up delay={800} distance="24px">
          <div>
            (3) We build durable relationships that last the test of time.
          </div>
        </Fade>
        <Fade up delay={900} distance="24px">
          <div>(4) We push the team forward and dream big together.</div>
        </Fade>
      </div>
    </div>
  );
};

export default Values;

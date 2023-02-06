//@ts-ignore
import Fade from "react-reveal/Fade";

const Mission = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Fade up delay={1000} distance="24px">
        <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          Our Mission
        </div>
      </Fade>
      <Fade up delay={1100} distance="24px">
        <div className="pt-6 font-bold text-5xl w-[1024px]">
          We accelerate the world’s most empathy-driven healthcare innovations
          by connecting and supporting diverse creators.
        </div>
      </Fade>
      <Fade up delay={1200} distance="24px">
        <div className="pt-6 opacity-50 text-lg w-[768px]">
          Health is the quintessential human experience for all. Despite its
          importance, medical innovations have slowed while the world around us
          has and will continue to accelerate to new heights. We need a
          disruption in this heavily-guarded field to inspire hope in humanity.
        </div>
      </Fade>
      <Fade up delay={1500} distance="24px">
        <div className="pt-8 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#00B59D] to-[#CB47F4] ">{`health{hacks} is the revolution.`}</div>
      </Fade>
    </div>
  );
};

export default Mission;

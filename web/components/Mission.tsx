//@ts-ignore
import Fade from "react-reveal/Fade";

const Mission = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Fade up delay={500} distance="24px">
        <div className="align-center ">
          <img src="/ring (1).png" alt="mission" />
        </div>
      </Fade>
      <Fade up delay={500} distance="24px">
        <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          Our Mission
        </div>
      </Fade>
      <Fade up delay={600} distance="24px">
        <div className="pt-6 font-bold sm:text-2xl md:text-3xl xl:text-5xl sm:w-[384px] md:w-[512px] lg:w-[768px] xl:w-[1024px]">
          We accelerate the world’s most empathy-driven healthcare innovations
          by connecting and supporting diverse creators.
        </div>
      </Fade>
      <Fade up delay={700} distance="24px">
        <div className="pt-6 opacity-50 sm:text-sm lg:text-base xl:text-lg sm:w-[384px] md:w-[512px] lg:w-[640px] xl:w-[768px]">
          Health is the quintessential human experience for all. Despite its
          importance, medical innovations have slowed while the world around us
          has and will continue to accelerate to new heights. We need a
          disruption in this heavily-guarded field to inspire hope in humanity.
        </div>
      </Fade>
      <Fade up delay={700} distance="24px">
        <div className="pt-8 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#00B59D] to-[#CB47F4] ">{`health{hacks} is the revolution.`}</div>
      </Fade>
    </div>
  );
};

export default Mission;

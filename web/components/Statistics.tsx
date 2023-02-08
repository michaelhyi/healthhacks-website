import Stat from "./Stat";
//@ts-ignore
import Fade from "react-reveal/Fade";

const Statistics = () => {
  return (
    <Fade delay={500}>
      {/* sm:space-y-12  */}
      <div className="flex items-center justify-center sm:flex-col  md:flex-row xl:space-y-0 xl:space-x-12 2xl:space-x-16 text-center border-y-[0.5px] border-white border-opacity-25 mt-16 py-8 bg-hh-gray shadow-md shadow-hh-gray">
        <Stat value={0} name="LINES OF CODE NEEDED" />
        <div className="border-l-2  xl:border-l-2 border-[#353535] md:h-[75px] sm:h-[50px]" />
        <Stat value={1000} name="TOTAL PARTICIPANTS" />
        <div className="border-l-2  xl:border-l-2 border-[#353535] md:h-[75px] sm:h-[50px]"/>
        <Stat value={3} name="EVENTS HELD" />
        <div className="border-l-2 border-[#353535] md:h-[75px] sm:h-[50px]" />
        <Stat value={36000} name="HOURS SPENT CHANGING HEALTHCARE" />
      </div>
    </Fade>
  );
};

export default Statistics;

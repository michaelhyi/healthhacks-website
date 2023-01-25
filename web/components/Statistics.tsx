import Stat from "./Stat";
//@ts-ignore
import Fade from "react-reveal/Fade";

const Statistics = () => {
  return (
    <Fade delay={2000}>
      <div className="flex items-center justify-center space-x-16 text-center border-y-[0.5px] border-white border-opacity-25 mt-16 py-16">
        <Stat value={0} name="LINES OF CODE NEEDED" />
        <div className="border-l-2 border-white h-[125px] opacity-50" />
        <Stat value={1000} name="TOTAL PARTICIPANTS" />
        <div className="border-l-2 border-white h-[125px] opacity-50" />
        <Stat value={3} name="EVENTS HELD" />
        <div className="border-l-2 border-white h-[125px] opacity-50" />
        <Stat value={36000} name="HOURS SPENT CHANGING HEALTHCARE" />
      </div>
    </Fade>
  );
};

export default Statistics;

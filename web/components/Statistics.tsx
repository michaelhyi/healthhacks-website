import Stat from "./Stat";

const Statistics = () => {
  return (
    <div className="flex items-center justify-center space-x-16 text-center border-y-[0.5px] border-white border-opacity-25 py-16">
      <Stat value="0" name="LINES OF CODE NEEDED" />
      <div className="border-l-2 border-white h-[125px] opacity-50" />
      <Stat value="1,000+" name="TOTAL PARTICIPANTS" />
      <div className="border-l-2 border-white h-[125px] opacity-50" />
      <Stat value="3" name="EVENTS HELD" />
      <div className="border-l-2 border-white h-[125px] opacity-50" />
      <Stat value="36,000+" name="HOURS SPENT CHANGING HEALTHCARE" />
    </div>
  );
};

export default Statistics;

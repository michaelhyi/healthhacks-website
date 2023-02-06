import React from "react";
import CountUp from "react-countup";

interface Props {
  name: string;
  value: number;
}

const Stat: React.FC<Props> = ({ name, value }) => {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <CountUp
        separator=","
        className="font-semibold sm:text-6xl xl:text-5xl 2xl:text-6xl"
        end={value}
        duration={2}
        delay={2}
        suffix={`${
          name === "TOTAL PARTICIPANTS" ||
          name === "HOURS SPENT CHANGING HEALTHCARE"
            ? "+"
            : ""
        }`}
      />
      <div className="font-medium opacity-50 sm:text-lg xl:text-base 2xl:text-lg">
        {name}
      </div>
    </div>
  );
};

export default Stat;

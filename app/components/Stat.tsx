"use client";

import CountUp from "react-countup";

interface Props {
  name: string;
  value: number;
}

const Stat: React.FC<Props> = ({ name, value }) => {
  return (
    <div className="flex flex-col text-center">
      <CountUp
        separator=","
        className="font-semibold sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl"
        end={value}
        duration={2.5}
        suffix={`${
          name === "TOTAL PARTICIPANTS" || name === "HOURS SPENT BUILDING"
            ? "+"
            : ""
        }`}
      />
      <div className="font-medium opacity-50 text-sm lg:text-sm xl:text-base 2xl:text-lg px-4 leading-tight md:mt-2 sm:mt-1">
        {name}
      </div>
    </div>
  );
};

export default Stat;

import React from "react";
import { Icon } from "./Icon";

interface Props {
  id: number;
  title: string;
  desc: string;
  icon_name: string;
}

const Day: React.FC<Props> = ({ id, title, desc, icon_name }) => {
  return (
    <div className="flex flex-col sm:space-x-0 md:flex-row xl:space-y-0 items-center">
      <video
        playsInline
        autoPlay
        loop
        muted
        className="w-[250px] md-[320px] xl:w-[384px] 2xl:w-[450px] mx-8 lg:mx-16 mt-16 md:mt-0"
      >
        <source src={`/days/day${id}a.mp4`} type="video/mp4" />
      </video>
      {/* Timeline */}
      <div className="flex flex-col">
        <div className="border-l relative border-opacity-75 border-dashed border-[#aaa] h-0 md:h-[40vh] xl:h-[50vh] 2xl:h-[60vh] w-0 top-0 border-0 left-1/2 justify-center invisible md:visible" />
        <div className="rounded-full border-opacity-75 border-[#aaa] w-0 h-0 md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] border-2 my-2 invisible md:visible" />
        <div className="border-l relative border-opacity-75 border-dashed border-[#aaa] h-0 md:h-[40vh] xl:h-[50vh] 2xl:h-[60vh] w-0 border-0 left-1/2 justify-center invisible md:visible" />
      </div>
      {/* Text */}
      <div className="flex flex-col text-center items-center md:items-start md:text-left w-[300px] lg:w-[450px] xl:w-[512px] space-y-2 md:space-y-4 pl-0 md:pl-8 lg:pl-16">
        {/* Icon */}
        <div className="flex md:relative bg-hh-gray rounded-lg md:w-[50px] md:h-[50px]">
          <div className="p-[10px] visbile"><Icon nameIcon={icon_name} propsIcon={{ size: 30, color: "#ccc" }} /></div>
        </div>
        {/* Title */}
        <div className="font-semibold lg:text-2xl md:text-xl text-md mr-0 md:mr-8 lg:mr-16">{`Day ${id}: ${title}`}</div>
        {/* Paragraph */}
        <div className="font-regular opacity-75 lg:text-md md:text-sm text-xs mr-0 md:mr-8 lg:mr-16">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Day;

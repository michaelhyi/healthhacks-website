import React from "react";
import { Component } from "react";
import { Icon } from "./Icon";

// interface IconTypeProps {
//   width: number;
//   height: number;
//   color: string;
// }

// type IconType = (props: IconTypeProps) => JSX.Element;

interface Props {
  id: number;
  title: string;
  desc: string;
  icon_name: string;
}

const Day: React.FC<Props> = ({ id, title, desc, icon_name }) => {
  return (
    <div className="flex sm:flex-col sm:space-y-16 sm:space-x-0 xl:sm:flex-row xl:space-y-0 items-center">
      <video
        playsInline
        autoPlay
        loop
        muted
        className="sm:w-[320px] xl:w-[384px] 2xl:w-[512px] mr-16"
      >
        <source src={`/days/day${id}a.mp4`} type="video/mp4" />
      </video>
      <div className="flex flex-col">
        <div className="border-l relative border-opacity-75 border-dashed border-[#aaa] h-[50vh] w-0 top-0 border-0 left-1/2 justify-center" />
        <div className="rounded-full border-opacity-75 border-[#aaa] w-[15px] h-[15px] border-2 my-2" />
        <div className="border-l relative border-opacity-75 border-dashed border-[#aaa] h-[50vh] w-0 border-0 left-1/2 justify-center" />
      </div>
      <div className="flex flex-col sm:text-center sm:w-[384px] md:w-[512px] xl:text-left xl:w-[384px] 2xl:w-[512px] space-y-4 pl-16">
        <div className="flex relative bg-hh-gray rounded-lg w-[50px] h-[50px] ">
          <div className="p-[10px]"><Icon nameIcon={icon_name} propsIcon={{ size: 30, color: "#ccc" }} /></div>
        </div>
        <div className="font-semibold text-3xl sm:text-2xl sm:mx-0">{`Day ${id}: ${title}`}</div>
        <div className="font-regular opacity-75 text-xl sm:text-lg xl:w-[384px] 2xl:w-[512px] sm:mx-0">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Day;

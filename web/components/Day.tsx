import React from "react";

interface Props {
  key: number;
  id: number;
  title: string;
  desc: string;
}

const Day: React.FC<Props> = ({ key, id, title, desc }) => {
  return (
    <div className="flex space-x-48 items-center">
      <video autoPlay loop muted className="xl:w-[384px] 2xl:w-[512px]">
        <source src={`/days/Day ${id}.mp4`} type="video/mp4" />
      </video>
      <div className="flex flex-col xl:w-[384px] 2xl:w-[512px] space-y-4">
        <div className="font-semibold text-3xl">{`Day ${id}: ${title}`}</div>
        <div className="font-medium opacity-75 text-xl xl:w-[384px] 2xl:w-[512px]">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Day;

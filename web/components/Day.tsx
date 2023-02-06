import React from "react";

interface Props {
  key: number;
  id: number;
  title: string;
  desc: string;
}

const Day: React.FC<Props> = ({ key, id, title, desc }) => {
  return (
    <div className="flex lg:flex-col lg:space-y-24 lg:space-x-0 xl:space-x-48 items-center">
      <video
        autoPlay
        loop
        muted
        className="lg:w-[320px] xl:w-[384px] 2xl:w-[512px]"
      >
        <source src={`/days/Day ${id}.mp4`} type="video/mp4" />
      </video>
      <div className="flex flex-col lg:text-center lg:w-[512px] xl:w-[384px] 2xl:w-[512px] space-y-4">
        <div className="font-semibold text-3xl">{`Day ${id}: ${title}`}</div>
        <div className="font-medium opacity-75 text-xl xl:w-[384px] 2xl:w-[512px]">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Day;

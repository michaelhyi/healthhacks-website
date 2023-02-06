import React from "react";

interface Props {
  id: number;
  title: string;
  desc: string;
}

const Day: React.FC<Props> = ({ id, title, desc }) => {
  return (
    <div className="flex sm:flex-col sm:space-y-24 sm:space-x-0 xl:sm:flex-row xl:space-y-0 xl:space-x-48 items-center">
      <video
        autoPlay
        // loop
        muted
        className="sm:w-[320px] xl:w-[384px] 2xl:w-[512px]"
        src={`/days/Day ${id}.mp4`}
      />
      <div className="flex flex-col sm:text-center sm:w-[384px] md:w-[512px] xl:text-left xl:w-[384px] 2xl:w-[512px] space-y-4">
        <div className="font-semibold text-3xl">{`Day ${id}: ${title}`}</div>
        <div className="font-medium opacity-75 text-xl xl:w-[384px] 2xl:w-[512px]">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Day;

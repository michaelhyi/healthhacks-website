import React from "react";

interface Props {
  id: number;
  title: string;
  desc: string;
  embed: string;
}

const Day: React.FC<Props> = ({ id, title, desc, embed }) => {
  return (
    <div className="flex sm:flex-col sm:space-y-24 sm:space-x-0 xl:sm:flex-row xl:space-y-0 xl:space-x-48 items-center">
      {/* <div className="pointer-events-none">
        <iframe
          width="662"
          height="1176"
          className="sm:w-[320px] xl:w-[384px] 2xl:w-[512px]"
          src={`https://www.youtube.com/embed/${embed}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${embed}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div> */}

      <video
        playsInline
        autoPlay
        loop
        muted
        className="sm:w-[320px] xl:w-[384px] 2xl:w-[512px]"
      >
        <source src={`/days/day${id}a.mp4`} type="video/mp4" />
      </video>
      <div className="flex flex-col sm:text-center sm:w-[384px] md:w-[512px] xl:text-left xl:w-[384px] 2xl:w-[512px] space-y-4">
        <div className="font-semibold text-3xl sm:text-2xl sm:mx-4">{`Day ${id}: ${title}`}</div>
        <div className="font-medium opacity-75 text-xl sm:text-lg xl:w-[384px] 2xl:w-[512px] sm:mx-4">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Day;

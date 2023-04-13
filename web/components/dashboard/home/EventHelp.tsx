import React from 'react';
import SubtitleDash from '../SubtitleDash';

const EventHelp = () => {
  const slackLink = "https://join.slack.com/t/healthhacks20-ca55937/shared_invite/zt-1ss2jpyxc-2du0AHrWgbv4pd~cYRLR9w";
  const handbookLink = "https://docs.google.com/document/d/1nRTP5cP_kwHXyoN-qbDIu2UE4NJqKr-2JV8dA_KAlbE/edit?usp=sharing";
  const floorPlanLink = "/health{hacks} 2023 - Venue Map.pdf";
  const emergencyLink = "tel:714-633-2888";


  return (
    <div className="flex flex-col justify-center w-full">
      {/* <p className="text-md md:text-xl font-medium text-center">
        Participant HQ:
      </p> */}
      <SubtitleDash title="Launch Pad" />
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          <a href={handbookLink} target="_blank" rel="noopener noreferrer">Participant Handbook</a>
        </button>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
        <a href={floorPlanLink} target="_blank" rel="noopener noreferrer">Venue Map</a>
        </button>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          <a href={slackLink} target="_blank" rel="noopener noreferrer">Join Our Slack</a>
        </button>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          <a href={emergencyLink} target="_blank" rel="noopener noreferrer">Emergency Help</a>

        </button>
      </div>
    </div>
  );
};

export default EventHelp;
import React from 'react';
import SubtitleDash from '../SubtitleDash';

const EventHelp = () => {

  return (
    <div className="flex flex-col justify-center w-full">
      {/* <p className="text-md md:text-xl font-medium text-center">
        Participant HQ:
      </p> */}
      <SubtitleDash title="Launch Pad" />
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          Participant Handbook
        </button>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          Help Desk
        </button>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          Venue Map
        </button>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          Join Our Slack
        </button>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75">
          Emergency Contact
        </button>
        {/* <ul className="list-disc list-outside md:pl-12 sm:pl-6">
          <li className="pl-0">Participant Handbook</li>
          <li className="pl-0">Help Desk</li>
          <li className="pl-0">Venue Map</li>
        </ul> */}
      </div>
    </div>
  );
};

export default EventHelp;
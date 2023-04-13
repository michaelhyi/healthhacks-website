import moment from "moment";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import { events } from "@/data/schedule";

function Scheduler() {
  const [currentDate, setCurrentDate] = useState(moment("2023-04-14"));

  const scheduleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const firstEvent = events.find((event) => event.time.isSame(currentDate, "day"));

    if (firstEvent && scheduleRef.current) {
      const start = moment.duration(firstEvent.time.diff(firstEvent.time.clone().hour(8))).asMinutes();
      const startInPixels = (start / 60) * 64;

      if (scheduleRef.current) {
        scheduleRef.current.scrollTop = startInPixels;
      }
    }
  }, [currentDate, events]);

  const handlePrevDay = () => {
    if (currentDate > moment("2023-04-14")) {
      setCurrentDate(currentDate.clone().subtract(1, "day"));
    }
  };

  const handleNextDay = () => {
    if (currentDate < moment("2023-04-16")) {
      setCurrentDate(currentDate.clone().add(1, "day"));
    }
  };

  const timeSlots = [];
  for (let i = 8; i < 23; i++) {
    const time = moment().startOf("day").add(i, "hours");
    timeSlots.push(time.format("hh:mm A"));
  }

  const renderEvents = () => {
    return events
      .filter((event) => event.time.isSame(currentDate, "day"))
      .map((event, index) => {
        const start = moment
          .duration(event.time.diff(event.time.clone().hours(8).minutes(0)))
          .asMinutes();

        const startInPixels = (start / 60.0) * 64;
        const height = (event.duration / 60) * 64;

        return (
          <div
            className="event text-white block w-full h-24 rounded-xl pl-2 pt-1 overflow-hidden whitespace-nowrap text-clip border-2 border-[#333]"
            key={index}
            style={{ top: startInPixels, height, position: "absolute", backgroundColor: event.color }}
          //onClick={() => window.open(event.link)}
          >
            <p className="overflow-hidden whitespace-nowrap text-clip text-sm">
              {event.title} –– {event.time.format("hh:mm A")}
            </p>
            {event.location !== "" && (
              <p className="overflow-hidden whitespace-nowrap text-xs font-thin text-clip">
                {event.location}
              </p>
            )}
          </div>
        );
      });
  };

  const timeSlotHeight = 64;

  return (
    <div className="flex flex-col bg-hh-gray border border-[#aaa] border-opacity-30 rounded-2xl p-4 md:p-6 h-full w-full overflow-hidden">
      <div className="header flex flex-row items-center justify-between mb-2">
        <button
          className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
          onClick={handlePrevDay}
        >
          <AiOutlineLeft />
        </button>
        <h2 className="text-lg font-semibold">
          {currentDate.format("MMMM DD, YYYY")}
        </h2>
        <button
          className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
          onClick={handleNextDay}
        >
          <AiOutlineRight />
        </button>
      </div>
      <hr className="h-[1px] bg-gray-200 border-0 rounded my-1 mb-4"></hr>

      <div ref={scheduleRef} className="scheduler flex flex-row overflow-y-scroll h-full gap-x-2 bg-[#333] p-3 -mx-3 rounded-2xl">
        <div className="sidebar inline-block">
          {timeSlots.map((time) => (
            <div
              key={time}
              className="block w-full"
              style={{ height: timeSlotHeight }}
            >
              <hr className="h-[1px] bg-[#888] border-0 rounded"></hr>
              <div className="time text-sm">{time}</div>
            </div>
          ))}
        </div>
        <div className="schedule flex-1 relative">
          <div className="events flex flex-col gap-y-[2px]">
            {renderEvents()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;

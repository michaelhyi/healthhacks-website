import moment from "moment";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";

function Scheduler() {
  const [currentDate, setCurrentDate] = useState(moment("2023-04-14"));
  const [events, setEvents] = useState([
    {
      time: moment("2023-04-14 17:00:00"),
      title: "Participant Welcome",
      duration: 60,
    },
    {
      time: moment("2023-04-14 18:00:00"),
      title: "Dinner",
      duration: 60,
    },
    {
      time: moment("2023-04-14 19:00:00"),
      title: "Opening Ceremony",
      duration: 60,
    },
    {
      time: moment("2023-04-14 20:00:00"),
      title: "Biodesign Needs Workshop",
      duration: 30,
    },
    {
      time: moment("2023-04-14 20:30:00"),
      title: "Team Formation Session",
      duration: 60,
    },
    {
      time: moment("2023-04-14 22:00:00"),
      title: "Venue Closes",
      duration: 30,
    },
    {
      time: moment("2023-04-15 08:00:00"),
      title: "Venue Opens",
      duration: 30,
    },
    {
      time: moment("2023-04-15 11:00:00"),
      title: "Brunch",
      duration: 60,
    },
    {
      time: moment("2023-04-15 12:00:00"),
      title: "Team Registration Deadline",
      duration: 60,
    },
    {
      time: moment("2023-04-15 18:00:00"),
      title: "Dinner",
      duration: 60,
    },
    {
      time: moment("2023-04-15 19:00:00"),
      title: "Office Hours & Practice Pitching",
      duration: 120,
    },
    {
      time: moment("2023-04-15 22:00:00"),
      title: "Venue Closes",
      duration: 30,
    },
    {
      time: moment("2023-04-16 08:30:00"),
      title: "Office Hours & Practice Pitching",
      duration: 150,
    },
    {
      time: moment("2023-04-16 11:00:00"),
      title: "Final Project Submission Deadline & Brunch",
      duration: 60,
    },
    {
      time: moment("2023-04-16 12:00:00"),
      title: "Judging Begins with Pitches from All Teams",
      duration: 120,
    },
    {
      time: moment("2023-04-16 14:00:00"),
      title: "Judges Deliberation Time",
      duration: 60,
    },
    {
      time: moment("2023-04-16 15:00:00"),
      title: "Awards Ceremony",
      duration: 30,
    },
    
  ]);

  const scheduleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const firstEvent = events.find((event) => event.time.isSame(currentDate, "day"));
  
    if (firstEvent && scheduleRef.current) {
      const start = moment.duration(firstEvent.time.diff(firstEvent.time.clone().startOf("day"))).asMinutes();
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
  for (let i = 0; i < 24; i++) {
    const time = moment().startOf("day").add(i, "hours");
    timeSlots.push(time.format("hh:mm A"));
  }

  const renderEvents = () => {
    return events
      .filter((event) => event.time.isSame(currentDate, "day"))
      .map((event, index) => {
        const start = moment
          .duration(event.time.diff(event.time.clone().startOf("day")))
          .asMinutes();
        const startInPixels = (start / 60) * 64;
        const height = (event.duration / 60) * 64;

        return (
          <div
            className="event text-white block w-full h-24 bg-blue-500 rounded-xl pl-2 pt-2 text-xs xl:text-sm overflow-hidden whitespace-nowrap text-clip"
            key={index}
            style={{ top: startInPixels, height, position: "absolute" }}
            //onClick={() => window.open(event.link)}
          >
            <p className="overflow-hidden whitespace-nowrap text-clip">
              {event.title} –– {event.time.format("hh:mm A")}
            </p>
          </div>
        );
      });
  };

  const timeSlotHeight = 64;

  return (
    <div className="flex flex-col bg-hh-gray border border-[#aaa] border-opacity-30 rounded-2xl p-4 md:p-8 h-full w-full p-4 overflow-hidden">
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
        <div className="sidebar w-1/6">
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

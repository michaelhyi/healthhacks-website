import { useState } from 'react';
import moment from 'moment';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Scheduler() {
  const [currentDate, setCurrentDate] = useState(moment('2023-04-14'));
  const [events, setEvents] = useState([
    { time: moment('2023-04-14 17:00:00'), title: 'Participant Welcome', duration: 60, link: 'https://example.com/event1' },
    { time: moment('2023-04-14 18:00:00'), title: 'Dinner', duration: 60, link: 'https://example.com/event2' },
    { time: moment('2023-04-14 19:00:00'), title: 'Opening Ceremony', duration: 60, link: 'https://example.com/event3' },
    { time: moment('2023-04-14 20:00:00'), title: 'Biodesign Needs Workshop', duration: 30, link: 'https://example.com/event3' },
    { time: moment('2023-04-14 20:30:00'), title: 'Team Formation Session', duration: 60, link: 'https://example.com/event3' },
    { time: moment('2023-04-14 22:00:00'), title: 'Venue Closes', duration: 30, link: 'https://example.com/event3' },



  ]);

  // Calculate the number of minutes between 12 AM and the start of the first event
  const startOffset = events.length > 0 ? moment.duration(events[0].time.diff(events[0].time.startOf('day'))).asMinutes() : 0;

  // Calculate the number of minutes between 12 AM and the end of the last event
  // const endOffset = events.length > 0 ? moment.duration(events[events.length - 1].time.clone().add(events[events.length - 1].duration, 'minutes').diff(moment().startOf('day'))).asMinutes() : 0;


  const handlePrevDay = () => {
    if (currentDate > moment('2023-04-14')) {
      setCurrentDate(currentDate.clone().subtract(1, 'day'));
    }
  };

  const handleNextDay = () => {
    if (currentDate < moment('2023-04-16')) {
      setCurrentDate(currentDate.clone().add(1, 'day'));
    }
  };

  const timeSlots = [];
  for (let i = 8; i < 23; i++) {
    const time = moment().startOf('day').add(i, 'hours');
    timeSlots.push(time.format('hh:mm A'));
  }

  const renderEvents = () => {
    return events.map((event, index) => {
      const times = event;
      const start = moment.duration(event.time.diff(event.time)).asMinutes() - startOffset;
      const end = start + event.duration;
      const height = (event.duration / 60) * 62;
      console.log(event.time.format('HH:mm'));
      if (event.duration <= 30) {
        return (
          <div
            className="event flex items-center text-white block w-full h-24 bg-blue-500 rounded-xl pl-2 text-xs xl:text-sm overflow-hidden whitespace-nowrap text-clip"
            key={index}
            style={{ top: start, height }}
            onClick={() => window.open(event.link)}
          >
            <p className='overflow-hidden whitespace-nowrap text-clip'>
              {event.title} –– {event.time.format('hh:mm A')}
            </p>
          </div>
        );
      } else {
        return (
          <div
            className="event text-white block w-full h-24 bg-blue-500 rounded-xl pl-2 pt-2 text-xs xl:text-sm overflow-hidden whitespace-nowrap text-clip"
            key={index}
            style={{ top: start, height }}
            onClick={() => window.open(event.link)}
          >
            <p className='overflow-hidden whitespace-nowrap text-clip'>
              {event.title} –– {event.time.format('hh:mm A')}
            </p>
          </div>
        );
      }
    });
  };

  return (
    <div className='flex flex-col  bg-hh-gray border border-[#aaa] border-opacity-30 rounded-2xl p-4 md:p-8 h-full w-full p-4 overflow-hidden'>
      <div className="header flex flex-row items-center justify-between mb-2">
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75" onClick={handlePrevDay}>
          <AiOutlineLeft />
        </button>
        <h2 className="text-lg font-semibold">{currentDate.format('MMMM DD, YYYY')}</h2>
        <button className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75" onClick={handleNextDay}>
          <AiOutlineRight />
        </button>
      </div>
      <hr className="h-[1px] bg-gray-200 border-0 rounded my-1 mb-4"></hr>

      <div className="scheduler flex flex-row overflow-y-scroll h-full gap-x-2 bg-[#333] p-3 -mx-3 rounded-2xl">
        <div className="sidebar w-1/">
          {timeSlots.map((time) => (
            <div key={time} className="block w-full h-16">
              <hr className="h-[1px] bg-[#888] border-0 rounded"></hr>
              <div className="time text-sm">{time}</div>
            </div>
          ))}
        </div>
        <div className="schedule flex-1">
          <div className="events flex flex-col gap-y-[2px]">
            {/* Replace this with your code for displaying events
            <div className="block w-full h-24 bg-blue-500"></div>
            <div className="block w-full h-16 bg-red-500"></div>
            <div className="block w-full h-32 bg-green-500"></div> */}
            {renderEvents()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;

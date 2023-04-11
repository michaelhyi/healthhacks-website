import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Countdown = () => {
  // Consts for seconds, mins, etc.
  const [secs, setSecs] = useState('');
  const [mins, setMins] = useState('');
  const [hours, setHours] = useState('');
  const [days, setDays] = useState('');
  const [event, setEvent] = useState('');

  // Array for deadline times
  const [dueDates, setDueDates] = useState([
    moment('2023-04-14').set({ hour: 17 }).tz('America/Los_Angeles'),   // For event start @ 5 PM Friday
    moment('2023-04-15').set({ hour: 12 }).tz('America/Los_Angeles'),   // For team registration @ 12 PM Saturday
    moment('2023-04-16').set({ hour: 11 }).tz('America/Los_Angeles'),   // For final submit @ 11 AM Sunday
    moment('2023-04-16').set({ hour: 12 }).tz('America/Los_Angeles'),   // For final judging @ 12 PM Sunday
    moment('2023-04-16').set({ hour: 15 }).tz('America/Los_Angeles'),   // For award ceremony @ 3 PM Sunday
  ]);

  // Array for deadline names
  const eventNames = [
    "Days until health{hacks} 2023:",
    "Team Registration Deadline:",
    "Final Project Submission Deadline:",
    "Time until Final Judging Session:",
    "Time until Awards Ceremony:"
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const nextDueDate = dueDates.find((dueDate) => dueDate.isAfter(now));

      // If cannot find time, will make 00:00:00:00
      if (nextDueDate == undefined) {
        setDays("00");
        setHours("00");
        setMins("00");
        setSecs("00");
        setEvent("Days until health{hacks} 2023:")
        return;
      }

      // Else will get the difference of time to the deadline
      else {
        const diff = nextDueDate.diff(now);
        const index = dueDates.indexOf(nextDueDate);
        setEvent(eventNames[index]);

        const duration = moment.duration(diff);
        setDays(duration.days().toString().padStart(2, '0'));
        setHours(duration.hours().toString().padStart(2, '0'));
        setMins(duration.minutes().toString().padStart(2, '0'));
        setSecs(duration.seconds().toString().padStart(2, '0'));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dueDates]);

  return (
    <div className="flex flex-col justify-center items-center bg-hh-gray border border-[#aaa] border-opacity-30 w-full rounded-2xl p-4 md:p-8">
      <p className="text-md md:text-xl font-medium text-center select-none">
        {event}<br />
      </p>
      <div className='flex flex-row gap-x-3 md:gap-x-6 mt-4'>
        <div className='flex flex-col items-center gap-y-2'>
          <div className='flex flex-row gap-x-1 lg:gap-x-2'>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{days[0]}</div>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{days[1]}</div>
          </div>
          <p className='text-xs lg:text-md select-none'>
            Days
          </p>
        </div>

        <div className='flex flex-col items-center gap-y-2'>
          <div className='flex flex-row gap-x-1 lg:gap-x-2'>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{hours[0]}</div>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{hours[1]}</div>
          </div>
          <p className='text-xs lg:text-md select-none'>
            Hours
          </p>
        </div>

        <div className='flex flex-col items-center gap-y-2'>
          <div className='flex flex-row gap-x-1 lg:gap-x-2'>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{mins[0]}</div>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{mins[1]}</div>
          </div>
          <p className='text-xs lg:text-md select-none'>
            Minutes
          </p>
        </div>

        <div className='flex flex-col items-center gap-y-2'>
          <div className='flex flex-row gap-x-1 lg:gap-x-2'>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{secs[0]}</div>
            <div className='w-6 h-6 md:w-12 md:h-12 bg-white rounded-2xl text-black flex items-center justify-center text-xl md:text-2xl font-bold select-none'>{secs[1]}</div>
          </div>
          <p className='text-xs lg:text-md select-none'>
            Seconds
          </p>
        </div>
      </div>
    </div >
  );
};

export default Countdown;
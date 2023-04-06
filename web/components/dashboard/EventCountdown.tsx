import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = () => {
  // const [countdown, setCountdown] = useState('');

  // useEffect(() => {
  //   const endDate = moment('2023-04-14'); // set the end date
  //   const intervalId = setInterval(() => {
  //     const now = moment();
  //     const diff = endDate.diff(now);
  //     const duration = moment.duration(diff);
  //     const days = duration.days().toString().padStart(2, '0');
  //     const hours = duration.hours().toString().padStart(2, '0');
  //     const minutes = duration.minutes().toString().padStart(2, '0');
  //     const seconds = duration.seconds().toString().padStart(2, '0');
  //     setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  const [countdown, setCountdown] = useState('');
  const [dueDate, setDueDate] = useState(moment('2023-04-16'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const diff = dueDate.diff(now);
      if (diff < 0) {
        setCountdown('00 d | 00 h | 00 m | 00 s');
      } else {
        const duration = moment.duration(diff);
        const days = duration.days().toString().padStart(2, '0');
        const hours = duration.hours().toString().padStart(2, '0');
        const minutes = duration.minutes().toString().padStart(2, '0');
        const seconds = duration.seconds().toString().padStart(2, '0');
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dueDate]);

  return (
    <div className="flex flex-col justify-center items-center bg-hh-gray border-opacity-50 w-full rounded-2xl p-8">
      <p className="text-xl font-md text-center">
        Days Until Event:<br />
      </p>
      <p className="text-2xl font-bold text-center">
        {countdown}
      </p>
    </div>
  );
};

export default Countdown;
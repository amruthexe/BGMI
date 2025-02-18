import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-02-28T10:00:00"); // Set target date and time

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center bg-black p-5">
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 p-8 rounded-xl shadow-lg text-white text-center w-full sm:w-80 md:w-96">
        <p className="text-lg font-semibold mb-4">Event Starts In:</p>
        <div className="flex justify-center gap-4 text-xl font-bold">
          <div className="flex flex-col items-center">
            <span className="text-4xl">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

import { useState, useEffect } from "react";

export default function ProgressBar({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("set timeout");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("remainign Time", remainingTime);
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <progress
      value={remainingTime}
      max={timeout}
      className="w-full pl-3 pr-3 mb-3 rounded-3xl"
    />
  );
}

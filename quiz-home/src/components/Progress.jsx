import { useState, useEffect } from "react";

const Progress = ({ timeout, onTimout, index }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  console.log("timeout", timeout);

  useEffect(() => {
    console.log("setting timeout");
    const timer = setTimeout(onTimout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimout]);

  useEffect(() => {
    console.log("setting interval");
    console.log("remaining time", remainingTime);
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      value={remainingTime}
      max={timeout}
      className="w-full px-5 mb-5 mt-3 rounded-2xl"
    />
  );
};

export default Progress;

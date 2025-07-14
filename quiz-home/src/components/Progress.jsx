import { useState, useEffect } from "react";

const Progress = ({ timeout, onTimout }) => {
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
    const interval = setInterval(() => {
      setRemainingTime((prev) => Math.max(0, prev - 100));
    }, 100);
    return () => clearInterval(interval);
  }, [timeout]);
  return (
    <progress
      value={remainingTime}
      max={timeout}
      className="w-full px-5 mb-5 mt-3 rounded-2xl"
    />
  );
};

export default Progress;

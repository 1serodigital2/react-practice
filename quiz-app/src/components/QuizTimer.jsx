import { useState, useEffect } from "react";

export default function QuizTimer({ timeout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("set timeout");
    const timer = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeout]);

  useEffect(() => {
    console.log("set interval");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-timer"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

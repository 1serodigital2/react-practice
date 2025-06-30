import { useState, useEffect } from "react";

export default function QuizTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("set timeout");
    const timer = setTimeout(onTimeOut, timeout);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, [onTimeOut, timeout]);

  useEffect(() => {
    console.log("set interval");
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }, []);

  return <progress id="question-timer" max={timeout} value={remainingTime} />;
}

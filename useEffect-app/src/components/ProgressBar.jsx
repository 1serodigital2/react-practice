import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTimer, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevTimer) => prevTimer - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTimer} max={timer} />;
}

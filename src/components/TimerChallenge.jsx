import { useState, useRef } from "react";

  export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart(){
      setTimerStarted(true);
      timer.current = setTimeout(() => {
        setTimerExpired(true);
        // setTimerStarted(false)
      },targetTime * 1000);
    }

    function handleStop(){
      clearTimeout(timer.current);
    }

    return (
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You have lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p><button onClick={timerStarted ? handleStop : handleStart}>{!timerStarted ? 'Start' : 'Stop'} Challenge</button></p>
        <p className={timerStarted ? 'active' : undefined}>{timerStarted ? 'Time is running' : 'Time is inactive'}</p>
      </section>
    )
  }
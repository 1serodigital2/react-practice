import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handlePlayerName(){
    // setSubmitted(true);
   setEnteredPlayerName(playerName.current.value);
   playerName.current.value = '';
  //  console.log(playerName.current);
  }
  

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handlePlayerName}>Set Name</button>
      </p>
    </section>
  );
}

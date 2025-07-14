import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import QuizWrapper from "./components/QuizWrapper";

function App() {
  const [quizStart, setQuizStart] = useState(false);

  return (
    <>
      <Header />
      <main>
        {!quizStart && (
          <button
            onClick={() => setQuizStart(true)}
            className="py-3 px-5 rounded bg-amber-800 hover:bg-amber-950 cursor-pointer"
          >
            Start Quiz
          </button>
        )}

        {quizStart && <QuizWrapper />}
      </main>
    </>
  );
}

export default App;

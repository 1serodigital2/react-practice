import { useState } from "react";

import Header from "./components/Header";
import QuestionWrapper from "./components/QuestionWrapper";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <>
      <Header />
      <main>
        {!startQuiz && (
          <div
            id="init-quiz"
            className="flex items-center justify-center mt-8 "
          >
            <button
              className="bg-amber-600 py-3 px-5 rounded text-white cursor-pointer hover:bg-amber-800"
              onClick={() => setStartQuiz(true)}
            >
              Start Quiz
            </button>
          </div>
        )}
        {startQuiz && <QuestionWrapper />}
      </main>
    </>
  );
}

export default App;

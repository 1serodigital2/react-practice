import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import QuizTimer from "./QuizTimer";
import quizCompletedImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestion = userAnswers.length;

  const isQuizComplete = activeQuestion === QUESTIONS.length;

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestion].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevSelectedAnswers) => {
      return [...prevSelectedAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer timeout={10000} onTimeOut={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestion].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

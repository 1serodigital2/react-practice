import { act, useCallback, useState } from "react";
import QUESTIONS from "../questions";
import QuizTimer from "./QuizTimer";
import quizCompletedImg from "../assets/quiz-complete.png";
import Answers from "./Answers";
import Question from "./Question";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer(selectedAnswer) {
      setUserAnswers((prevSelectedAnswers) => {
        return [...prevSelectedAnswers, selectedAnswer];
      });
    },

    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

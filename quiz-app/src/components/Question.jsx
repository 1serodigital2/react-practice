import { useState } from "react";
import QuizTimer from "./QuizTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";

export default function Question({ onSelectAnswer, onSkipAnswer, index }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  function handleSelectedAnswer(answerSelected) {
    setAnswer({
      selectedAnswer: answerSelected,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answerSelected,
        isCorrect: QUESTIONS[index].answers[0] === answerSelected,
      });

      setTimeout(() => {
        onSelectAnswer(answerSelected);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }
  return (
    <div id="question">
      <QuizTimer timeout={10000} onTimeOut={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectedAnswer}
      />
    </div>
  );
}

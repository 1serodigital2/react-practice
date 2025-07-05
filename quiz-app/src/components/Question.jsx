import { useState } from "react";
import QuizTimer from "./QuizTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";

export default function Question({ onSelectAnswer, onSkipAnswer, index }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }
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

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuizTimer
        key={timer}
        timeout={timer}
        onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
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

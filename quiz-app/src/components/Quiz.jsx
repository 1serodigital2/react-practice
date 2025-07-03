import { useCallback, useEffect, useRef, useState } from "react";
import QUESTIONS from "../questions";
import QuizTimer from "./QuizTimer";
import quizCompletedImg from "../assets/quiz-complete.png";
import Answers from "./Answers";

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
      setAnswerState("answered");
      setUserAnswers((prevSelectedAnswers) => {
        return [...prevSelectedAnswers, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
      console.log("answerState", answerState);
    },

    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectedAnswer}
        />
      </div>
    </div>
  );
}

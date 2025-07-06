import { useState } from "react";

import QUESTIONS from "../questions";

export default function QuestionWrapper() {
  const [userTotalAnswers, setUserTotalAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  console.log("isCorrect", userAnswer.isCorrect);

  const activeQuestionIndex = userTotalAnswers.length;

  const isQuizComplete = userTotalAnswers.length === QUESTIONS.length;
  if (isQuizComplete) {
    return (
      <div
        id="summary"
        className="mt-8 max-w-3xl bg-stone-700 rounded p-3 ml-auto mr-auto text-3xl font-semibold"
      >
        <h2 className="text-white text-center">QUIZ IS COMPLETE</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex]?.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectedAnswer(answer, answerIndex) {
    setUserAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    console.log("userAnswer", userAnswer);
    setTimeout(() => {
      setUserAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[answerIndex].answers[0] === answer,
      });

      setUserTotalAnswers((userPrevAnswers) => {
        return [...userPrevAnswers, userAnswer];
      });
    }, 2000);

    console.log("userAnswer", userAnswer);
  }

  let answerState = "";

  if (userAnswer.selectedAnswer && userAnswer.selectedAnswer !== null) {
    answerState = userAnswer.isCorrect ? " correct" : " wrong";
  } else if (userAnswer.selectedAnswer !== "") {
    answerState = " answered";
  }
  console.log("answerState", answerState);
  return (
    <div
      id="question"
      className="bg-stone-700 max-w-3xl mr-auto ml-auto mt-8 rounded-2xl p-8"
    >
      <progress
        value="32"
        max="100"
        className="w-full pl-3 pr-3 mb-3 rounded-3xl"
      />
      <div className="question">
        <h2 className="mb-8 text-white text-2xl">
          {QUESTIONS[activeQuestionIndex].text}
        </h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => {
            let cssClass = "";
            const isSelected = userAnswer.selectedAnswer === answer;
            if (answerState && isSelected) {
              cssClass = answerState;
            }
            return (
              <li key={index}>
                <button
                  onClick={() => handleSelectedAnswer(answer, index)}
                  className={`cursor-pointer bg-stone-400 w-full rounded-3xl py-2 px-4 text-left mb-3 ${cssClass}`}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

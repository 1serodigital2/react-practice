import { useState, useRef } from "react";

import QUESTIONS from "../questions";

const Answers = ({
  activeQuestionIndex,
  onSelect,
  answerState,
  selectedAnswer,
}) => {
  console.log("ans selected", selectedAnswer);
  const shuffleAnswer = useRef();

  if (!shuffleAnswer.current) {
    shuffleAnswer.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffleAnswer.current.sort(() => Math.random() - 0.5);
  }

  // const shuffleAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  // console.log("aswerstate", answerState);
  // shuffleAnswer.sort(() => Math.random() - 0.5);
  // if (answerState == "") {
  // }

  return (
    <ul className="answers">
      {shuffleAnswer.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        const cssClass = isSelected ? answerState : "";

        return (
          <li key={answer} className="answer text-gray-300 text-2xl mb-4 ">
            <button
              className={
                "bg-blue-950 w-full text-left py-2.5 rounded-4xl px-6 cursor-pointer " +
                cssClass
              }
              onClick={() => onSelect(answer)}
              // disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;

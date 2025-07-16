import { useRef } from "react";

import QUESTIONS from "../questions";

const Answers = ({
  activeQuestionIndex,
  onSelect,
  answerState,
  selectedAnswer,
}) => {
  const shuffleAnswer = useRef();

  if (!shuffleAnswer.current) {
    shuffleAnswer.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffleAnswer.current.sort(() => Math.random() - 0.5);
  }

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

import { useMemo } from "react";

export default function Answers({
  answers,
  onSelect,
  index,
  selectedAnswerState,
}) {
  const shuffledAnswers = useMemo(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  }, [index]);

  let answerState = "";

  if (
    selectedAnswerState.selectedAnswer &&
    selectedAnswerState.isCorrect !== null
  ) {
    answerState = selectedAnswerState.isCorrect ? " correct" : " wrong";
  } else if (selectedAnswerState.selectedAnswer !== "") {
    answerState = " answered";
  }

  return (
    <ul id="answers">
      {shuffledAnswers.map((answer, index) => {
        let cssClass = "";
        const isSelected = selectedAnswerState.selectedAnswer === answer;
        if (answerState && isSelected) {
          cssClass = answerState;
        }
        return (
          <li key={index}>
            <button
              onClick={() => onSelect(answer)}
              className={`cursor-pointer bg-stone-400 w-full rounded-3xl py-2 px-4 text-left mb-3 ${cssClass}`}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

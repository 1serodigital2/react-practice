import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

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

  console.log("isQuizComplete", isQuizComplete);
  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

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

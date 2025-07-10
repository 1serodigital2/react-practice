import { useCallback, useState } from "react";

import QUESTIONS from "../questions";
import Answers from "./Answers";
import ProgressBar from "./ProgressBar";

export default function QuestionWrapper() {
  const [userTotalAnswers, setUserTotalAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  console.log("isCorrect", userAnswer.isCorrect);
  console.log("selectedAnswer", userAnswer.selectedAnswer);

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

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    answer
  ) {
    if (answer === null) {
      setUserTotalAnswers((userPrevAnswers) => {
        return [...userPrevAnswers, userAnswer];
      });
      return;
    }
    setUserAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setUserAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[activeQuestionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        setUserTotalAnswers((userPrevAnswers) => {
          return [...userPrevAnswers, userAnswer];
        });
      }, 2000);
    }, 2000);
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null);
  }, [handleSelectedAnswer]);
  return (
    <div
      id="question"
      className="bg-stone-700 max-w-3xl mr-auto ml-auto mt-8 rounded-2xl p-8"
    >
      <ProgressBar
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer}
      />
      <div className="quetion">
        <h2 className="mb-8 text-white text-2xl">
          {QUESTIONS[activeQuestionIndex].text}
        </h2>
        <Answers
          answers={QUESTIONS[activeQuestionIndex]?.answers}
          onSelect={handleSelectedAnswer}
          index={activeQuestionIndex}
          selectedAnswerState={userAnswer}
        />
      </div>
    </div>
  );
}

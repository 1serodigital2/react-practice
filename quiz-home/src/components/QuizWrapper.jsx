import { useState, useCallback } from "react";
import Answers from "./Answers";
import QUESTIONS from "../questions";
import Progress from "./Progress";

const QuizWrapper = () => {
  const [userTotalAnswer, setuserTotalAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const activeQuestionIndex = userTotalAnswer.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  if (isQuizComplete) {
    return (
      <h2 className="text-3xl font-bold text-white p-3 rounded bg-stone-500">
        Quiz Complete
      </h2>
    );
  }

  function handleSelectedAnswer(answer) {
    if (answer === null) {
      setuserTotalAnswer((prevAnswer) => {
        return [...prevAnswer, answer];
      });
      return;
    }
    setSelectedAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setSelectedAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[activeQuestionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        setuserTotalAnswer((prevAnswer) => [...prevAnswer, answer]);
        setSelectedAnswer({
          selectedAnswer: "",
          isCorrect: null,
        });
      }, 1000);
    }, 2000);
  }

  function handleSkipAnswer() {
    handleSelectedAnswer(null);
  }

  let currentTimeout = 10000;
  if (
    selectedAnswer.selectedAnswer !== "" &&
    selectedAnswer.isCorrect === null
  ) {
    currentTimeout = 2000;
  } else if (selectedAnswer.isCorrect !== null) {
    currentTimeout = 1000;
  }

  let answerState = "";
  if (selectedAnswer.selectedAnswer && selectedAnswer.isCorrect !== null) {
    answerState = selectedAnswer.isCorrect ? "correct" : "wrong";
  } else if (selectedAnswer.selectedAnswer) {
    answerState = "answered";
  } else {
    answerState = "";
  }

  console.log("quiz answerstate", answerState);
  return (
    <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-6 text-left">
      <Progress
        timeout={currentTimeout}
        onTimout={
          selectedAnswer.selectedAnswer === "" ? handleSkipAnswer : null
        }
        key={`progress-${currentTimeout}-${activeQuestionIndex}`}
      />
      <h2 className="text-3xl font-semibold mb-7">
        {QUESTIONS[activeQuestionIndex].text}
      </h2>
      <Answers
        key={`answer-${activeQuestionIndex}`}
        activeQuestionIndex={activeQuestionIndex}
        onSelect={handleSelectedAnswer}
        answerState={answerState}
        selectedAnswer={selectedAnswer.selectedAnswer}
      />
    </div>
  );
};

export default QuizWrapper;

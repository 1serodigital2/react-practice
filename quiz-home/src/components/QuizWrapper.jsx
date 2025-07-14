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

  let timer = 10000;

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

    console.log("selected answer", selectedAnswer);
    setTimeout(() => {
      setSelectedAnswer((answer) => {
        return {
          selectedAnswer: answer,
          isCorrect: QUESTIONS[activeQuestionIndex].answers[0] === answer,
        };
      });

      setTimeout(() => {
        setuserTotalAnswer((prevAnswer) => {
          return [...prevAnswer, answer];
        });
        console.log("total answer", userTotalAnswer);
      }, 2000);
    }, 2000);
  }

  // const handleSelectedAnswer = useCallback((answer) => {
  //   setuserTotalAnswer((prevAnswer) => {
  //     return [...prevAnswer, answer];
  //   });
  // });

  function handleSkipAnswer() {
    handleSelectedAnswer(null);
  }
  // const handleSkipAnswer = useCallback(() => {
  //   handleSelectedAnswer(null);
  // });

  let answerState = "test";
  if (selectedAnswer.selectedAnswer && selectedAnswer.isCorrect !== null) {
    answerState = selectedAnswer.isCorrect ? "correct" : "wrong";
    // timer = 2000;
  } else if (selectedAnswer.selectedAnswer) {
    answerState = "answered";
    // timer = 2000;
  }

  console.log("quiz answerstate", answerState);
  return (
    <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-6 text-left">
      <Progress
        timeout={timer}
        onTimout={handleSkipAnswer}
        key={activeQuestionIndex}
      />
      <h2 className="text-3xl font-semibold mb-7">
        {QUESTIONS[activeQuestionIndex].text}
      </h2>
      <Answers
        // key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        onSelect={handleSelectedAnswer}
        answerState={answerState}
        selectedAnswer={selectedAnswer.selectedAnswer}
      />
    </div>
  );
};

export default QuizWrapper;

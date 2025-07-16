import QUESTIONS from "../questions";

const QuizSummary = ({ answerSummary }) => {
  // Count correct, wrong, and skipped answers
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  answerSummary.forEach((answer, index) => {
    if (!answer) {
      skippedCount++;
    } else if (QUESTIONS[index].answers[0] === answer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  return (
    <div className="bg-blue-950 mt-5 rounded p-7">
      <h3 className="text-blue-300 font-bold text-3xl mb-5">QuizSummary</h3>
      <div className="grid grid-cols-3 mb-8 gap-2.5">
        <div className="bg-stone-900 p-3 rounded">
          <h4 className="text-2xl font-semibold text-white">Correct</h4>
          <div className="text-blue-300 text-2xl">{correctCount}</div>
        </div>
        <div className="bg-stone-900 p-3 rounded">
          <h4 className="text-2xl font-semibold text-white">Wrong</h4>
          <div className="text-blue-300 text-2xl">{wrongCount}</div>
        </div>
        <div className="bg-stone-900 p-3 rounded">
          <h4 className="text-2xl font-semibold text-white">Skipped</h4>
          <div className="text-blue-300 text-2xl">{skippedCount}</div>
        </div>
      </div>
      <ul>
        {answerSummary.map((answer, index) => {
          const cssClass =
            QUESTIONS[index].answers[0] === answer
              ? "text-green-500"
              : "text-red-500";
          return (
            <li className="mb-7" key={index}>
              <div className="text-stone-200">{QUESTIONS[index].text}</div>
              <p
                className={
                  "font-semibold " + (answer ? cssClass : "text-yellow-500")
                }
              >
                {answer || "Skipped"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizSummary;

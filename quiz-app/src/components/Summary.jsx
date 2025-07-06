import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  console.log("useranswers", userAnswers);

  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );

  const wrongAnswer = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswer}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((userAnswer, index) => {
          let cssClass = "user-answer";

          if (QUESTIONS[index].answers[0] === userAnswer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <div className="question">{QUESTIONS[index].text}</div>
              <div className={cssClass}>{userAnswer ?? "Skipped"}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

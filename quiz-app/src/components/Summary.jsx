import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  console.log("useranswers", userAnswers);

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">12%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">30%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((userAnswer, index) => {
          let cssClass = "";

          if (QUESTIONS[index].answers[0] === userAnswer) {
            cssClass = "corrrect";
          } else {
            cssClass = "wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <div className="question">{QUESTIONS[index].text}</div>
              <div className={`user-answer ${cssClass}`}>
                {userAnswer ?? "Skipped"}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

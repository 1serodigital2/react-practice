export default function Answers() {
  return (
    <ul id="answers">
      {shuffledAnswers.map((answer, index) => {
        let cssClass = "";
        const isSelected = userAnswer.selectedAnswer === answer;
        if (answerState && isSelected) {
          cssClass = answerState;
        }
        return (
          <li key={index}>
            <button
              onClick={() => handleSelectedAnswer(answer)}
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

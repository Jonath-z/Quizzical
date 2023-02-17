import AnswerCard from "./AnswerCard";
import shuffle from "./helpers/shuffle";

export default function QuestionCard(props) {
  const { question, correct_answer, incorrect_answers } = props.question;

  return (
    <div className="mb-5">
      <div className="flex flex-col gap-3 max-w-4xl border-b border-solid border-primary-300">
        <h3 className="text-3xl font-bold font-karla text-primary-500">
          {question}
        </h3>

        <div className="flex flex-wrap gap-4 mb-5">
          {shuffle([...incorrect_answers, correct_answer]).map((answer) => (
            <AnswerCard answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

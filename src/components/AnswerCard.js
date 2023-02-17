export default function AnswerCard({ answer, onClick }) {
  return (
    <div
      onClick={onClick}
      className="text-xl text-primary-500 font-karla py-2 px-5 border border-solid border-primary-500 rounded-2xl"
    >
      {answer}
    </div>
  );
}

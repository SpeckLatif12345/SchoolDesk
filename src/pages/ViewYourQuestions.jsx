import QuestionTable from "../components/questions/QuestionTable";
function ViewYourQuestions({ questions, deletequestion }) {
  return (
    <div className="min-h-screen    bg-gray-100 p-6">
      {/* Title */}
      <h1 className=" text-center  text-2xl font-semibold mb-6 ">
        Your Uploaded Questions
      </h1>
      <QuestionTable questions={questions} deletequestion={deletequestion} />
    </div>
  );
}
export default ViewYourQuestions;

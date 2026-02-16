import QuestionUploadForm from "../components/questions/QuestionUploadForm";

function UploadQuestions({ addQuestion }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Upload Questions</h1>
      <QuestionUploadForm addQuestion={addQuestion} />
    </div>
  );
}
export default UploadQuestions;

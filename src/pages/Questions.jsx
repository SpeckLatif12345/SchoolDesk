import QuestionTable from "../components/questions/QuestionTable";
import { FaPaperPlane } from "react-icons/fa";

function Questions({ questions, deletequestion }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Questions</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
          <FaPaperPlane />
          send to Server
        </button>
      </div>
      <QuestionTable questions={questions} deletequestion={deletequestion} />
    </div>
  );
}
export default Questions;

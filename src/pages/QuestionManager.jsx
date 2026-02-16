import { useState } from "react";
import UploadQuestions from "./UploadQuestions";
import Questions from "./Questions";

function QuestionManager() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const deletequestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id),
    );
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Upload form */}
      <UploadQuestions addQuestion={addQuestion} />

      {/* Right: Question table */}
      <Questions questions={questions} deletequestion={deletequestion} />
    </div>
  );
}
export default QuestionManager;

import { useState } from "react";
import SelectSubjectsToView from "./SelectSubjectsToView";
import ViewYourQuestions from "./ViewYourQuestions";

function QuestionViewManager() {
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
      <SelectSubjectsToView addQuestion={addQuestion} />
      {/* Right: Question table */}
      <ViewYourQuestions
        questions={questions}
        deletequestion={deletequestion}
      />
    </div>
  );
}
export default QuestionViewManager;

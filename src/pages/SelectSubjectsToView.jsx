import ViewQuestionsForm from "../components/questions/ViewYourQuestionsForm.jsx";
function SelectSubjectsToView({ addQuestion }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <h1 className="text-center text-2xl font-semibold mb-6">
        Select Subjects to View
      </h1>
      <ViewQuestionsForm addQuestion={addQuestion} />
    </div>
  );
}
export default SelectSubjectsToView;

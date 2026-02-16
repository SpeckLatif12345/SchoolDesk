import { FaTrash, FaFilePdf, FaFileWord } from "react-icons/fa";
import confirmDelete from "../../shared components/comfirmDelete";

function QuestionTable({ questions, deletequestion }) {
  const deleteHandler = (id) => {
    const message = "Are you sure you want to delete this question?";
    confirmDelete(() => {
      deletequestion(id);
    }, message);
  };

  return (
    <div className="p-6">
      {/* Scrollable Table Container */}
      <div className="  max-h-100  bg-white shadow rounded-lg  overflow-y-auto">
        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">File name</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="border-t">
                  <td className="px-4 py-3">{q.subject}</td>
                  <td className="px-4 py-3">{q.class_name}</td>

                  <td className="px-4 py-3 flex items-center gap-2">
                    {q.filename.endsWith(".pdf") ? (
                      <FaFilePdf className="text-red-500" />
                    ) : (
                      <FaFileWord className="text-blue-500" />
                    )}
                    {q.filename}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <button
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition"
                      onClick={() => deleteHandler(q.id)}
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {questions.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-10 text-center text-gray-500"
                  >
                    No questions uploaded yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default QuestionTable;

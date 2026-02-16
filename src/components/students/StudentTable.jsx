function StudentTable({ students, removeStudent }) {
  const sendToServer = () => {
    console.log("Sending students:", students);
    alert("Students sent to server");
  };
  return (
    <div>
      {/* Table content goes here */}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="px-4 py-3">
                  {s.last_name} {s.first_name}
                </td>
                <td className="px-4 py-3">{s.class_name}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => removeStudent(s.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="3" className="px-4 py-6 text-center text-gray-500">
                  No students added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Send Button */}
        {students.length > 0 && (
          <div className="p-4 border-t text-right">
            <button
              onClick={sendToServer}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Send All to Server
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default StudentTable;

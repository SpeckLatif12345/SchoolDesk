import { useState } from "react";

function ViewQuestionsForm({ addQuestion }) {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  /* Class → Subjects mapping */
  const classSubjects = {
    "JSS 1": ["Mathematics", "English", "Basic Science"],
    "JSS 2": ["Mathematics", "English", "Social Studies"],
    "JSS 3": ["Mathematics", "English", "Integrated Science"],
  };

  /* Handle class selection */
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubjects([]); // reset subjects when class changes
  };

  /* Handle subject checkbox toggle */
  const handleSubjectChange = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject],
    );

    //send request to server to fetch questions for selected class and subjects
    /* { selectedClass, selectedSubjects }  */

    const fetchquestionsfromServer = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("API_ENDPOINT", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedClass, selectedSubjects }),
        });
        const data = await response.json();
        // Assuming data is an array of questions
        data.forEach((question) => addQuestion(question));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
  };
  return (
    <div className=" m-auto bg-white shadow rounded-lg p-6 max-w-md space-y-5">
      {/* Select Class */}
      <div>
        <label className="block text-sm font-medium mb-1">Select Class</label>
        <select
          value={selectedClass}
          onChange={handleClassChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">-- Select class --</option>
          <option>JSS 1</option>
          <option>JSS 2</option>
          <option>JSS 3</option>
        </select>
      </div>

      {/* Subjects appear after class selection */}
      {selectedClass && (
        <div>
          <p className="text-sm font-medium mb-2">
            Subjects for {selectedClass}
          </p>

          <div className="space-y-3">
            {classSubjects[selectedClass].map((subject) => (
              <label
                key={subject}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                  className="w-4 h-4 text-blue-600"
                />
                <span>{subject}</span>
              </label>
            ))}
          </div>
        </div>
      )}
      {/* Action Button */}
      <button
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={(e) => fetchquestionsfromServer(e)}
      >
        View Questions
      </button>
    </div>
  );
}
export default ViewQuestionsForm;

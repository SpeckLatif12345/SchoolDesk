import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [selectedClass, setSelectedClass] = useState("");
  const navigate = useNavigate();

  function handleContinue() {
    if (!selectedClass) return;

    // Save choice (first-time setup)
    localStorage.setItem("teacherClass", selectedClass);
    localStorage.setItem("sign-in", "true");

    // home
    navigate("/questions");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome, Teacher 👋
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Please select your class to get started
        </p>

        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-6"
        >
          <option value="">Select your class</option>
          <option value="JSS 1">JSS 1</option>
          <option value="JSS 2">JSS 2</option>
          <option value="JSS 3">JSS 3</option>
        </select>

        <button
          onClick={handleContinue}
          disabled={!selectedClass}
          className={`w-full py-2 rounded text-white transition
            ${
              selectedClass
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Welcome;

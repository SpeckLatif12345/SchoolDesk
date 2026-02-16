import { useState } from "react";
import { toast } from "react-toastify";
import { FaUpload, FaFilePdf, FaFileWord } from "react-icons/fa";

function QuestionUploadForm({ addQuestion }) {
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!subject || !className || !file) {
      toast.error("Please fill all fields and select a file.");
      return;
    }

    // Create a new question object
    const newQuestion = {
      id: Date.now(), // Simple ID generation
      subject,
      class_name: className,
      filename: file.name,
    };

    addQuestion(newQuestion);
  };

  return (
    <div className="p-6 max-w-xl">
      {/* Card */}
      <div className="bg-white shadow rounded-lg p-6 space-y-5">
        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select subject</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Science</option>
          </select>
        </div>

        {/* Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Class
          </label>
          <select
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          >
            <option value="">Select class</option>
            <option>JSS 1</option>
            <option>JSS 2</option>
            <option>JSS 3</option>
          </select>
        </div>

        {/* File */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question File (PDF or DOCX)
          </label>

          <div className="flex items-center gap-4">
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => setFile(e.target.files[0])}
              className="text-sm"
            />

            {file && (
              <span className="flex items-center gap-2 text-sm text-gray-600">
                {file.name.endsWith(".pdf") ? (
                  <FaFilePdf className="text-red-500" />
                ) : (
                  <FaFileWord className="text-blue-500" />
                )}
                {file.name}
              </span>
            )}
          </div>
        </div>

        {/* Upload Button */}
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          onClick={(e) => handleUpload(e)}
        >
          <FaUpload />
          Upload
        </button>
      </div>
    </div>
  );
}
export default QuestionUploadForm;

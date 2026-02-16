import { useState } from "react";
import { toast } from "react-toastify";

function StudentForm({ setStudents }) {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Fname || !Lname || !studentClass) {
      toast.error("Please fill all fields");

      return;
    }

    const student = {
      id: Date.now(),
      first_name: Fname,
      last_name: Lname,
      class_name: studentClass,
    };

    setStudents((prev) => [...prev, student]);

    // Later → send to backend
    // fetch("/api/students", { method: "POST", body: JSON.stringify(student) })

    setFname("");
    setLname("");
    setStudentClass("");
    toast.success("Student registered successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Student First Name */}
      <div>
        <label className="block text-sm font-medium mb-1"> First Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="Enter student first name"
        />
      </div>

      {/* Student Last Name */}
      <div>
        <label className="block text-sm font-medium mb-1"> Last Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Enter student last name"
        />
      </div>

      {/* Class */}
      <div>
        <label className="block text-sm font-medium mb-1">Class</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
        >
          <option value="">Select class</option>
          <option>JSS 1</option>
          <option>JSS 2</option>
          <option>JSS 3</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Register Student
      </button>
    </form>
  );
}
export default StudentForm;

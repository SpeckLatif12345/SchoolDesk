import { useState } from "react";
import { toast } from "react-toastify";
import StudentForm from "../components/students/StudentForm";
import StudentTable from "../components/students/StudentTable";
function StudentManager() {
  const [students, setStudents] = useState([]);

  // Remove student by ID
  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    toast.info("Student removed");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Upload form */}
      <StudentForm setStudents={setStudents} />

      {/* Right: Question table */}
      <StudentTable students={students} removeStudent={removeStudent} />
    </div>
  );
}

export default StudentManager;

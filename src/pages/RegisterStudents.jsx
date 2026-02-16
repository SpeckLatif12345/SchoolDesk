import { useState } from "react";
import StudentForm from "../components/students/StudentForm";
function RegisterStudents() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Register Student</h2>
      <StudentForm />
    </div>
  );
}
export default RegisterStudents;

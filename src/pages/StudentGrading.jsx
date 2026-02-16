import { useEffect, useState } from "react";
import { useStudents } from "../context/studentContext";

function StudentGrading() {
  const { state, dispatch } = useStudents();
  const className = localStorage.getItem("teacherClass") || "";
  const students = state.studentsByClass[className] || [];

  /*
  function handleScoreChange(id, field, value) {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, [field]: value }
          : student
      )
    );
  }

  function calculatePercentage(score) {
    if (score === "" || isNaN(score)) return 0;
    return (Number(score) / 100) * 50;
  } */

  return (
    <div className="p-6">
      {/* Grading Table */}
      {students.length > 0 && (
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3">Student Name</th>
                <th className="px-4 py-3 text-center">Class Score</th>
                <th className="px-4 py-3 text-center">Class %</th>
                <th className="px-4 py-3 text-center">Exam Score</th>
                <th className="px-4 py-3 text-center">Exam %</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => {
                /*const classPercent = calculatePercentage(student.classScore);
                const examPercent = calculatePercentage(student.examScore); */

                return (
                  <tr key={student.id} className="border-t">
                    <td className="px-4 py-3 font-medium">{student.name}</td>

                    <td className="px-4 py-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={student.classScore || ""}
                        className="w-20 border rounded px-2 py-1 text-center"
                      />
                    </td>

                    <td className="px-4 py-3 text-center text-blue-600 font-semibold">
                      {/*classPercent.toFixed(1) */}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="w-20 border rounded px-2 py-1 text-center"
                      />
                    </td>

                    <td className="px-4 py-3 text-center text-green-600 font-semibold">
                      {/*examPercent.toFixed(1)} */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default StudentGrading;

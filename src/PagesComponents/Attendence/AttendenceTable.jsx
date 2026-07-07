import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAttendence } from "../../Redux/AttendenceSlice.js";

function AttendenceTable() {
  const studentsData = useSelector((state) => state.students.students);
  const attendenceData = useSelector((state) => state.attendences.attendences);

  const dispatch = useDispatch();

  const today = new Date().toLocaleDateString("en-GB");

  const handleAttendance = (studentId, status) => {
    dispatch(
      addAttendence({
        id: attendenceData.length + 1,
        studentId,
        date: today,
        status,
      }),
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">
          Students Attendance
        </h2>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Total Students: {studentsData.length}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Student ID</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-center">Attendance</th>
            </tr>
          </thead>

          <tbody>
            {studentsData.length > 0 ? (
              studentsData.map((student) => {
                const attendance = attendenceData.find(
                  (item) =>
                    item.studentId === student.id && item.date === today,
                );

                return (
                  <tr
                    key={student.id}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4">{student.id}</td>

                    <td className="px-6 py-4 font-medium text-gray-700">
                      {student.id}
                    </td>

                    <td className="px-6 py-4 text-gray-500">{today}</td>

                    <td className="px-6 py-4 text-center">
                      {attendance ? (
                        <span
                          className={`font-bold ${
                            attendance.status === "Present"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {attendance.status}
                        </span>
                      ) : (
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() =>
                              handleAttendance(student.id, "Present")
                            }
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
                          >
                            Present
                          </button>

                          <button
                            onClick={() =>
                              handleAttendance(student.id, "Absent")
                            }
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                          >
                            Absent
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendenceTable;

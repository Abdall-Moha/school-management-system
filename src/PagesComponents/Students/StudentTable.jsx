import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../../Redux/studentSlice.js";

function StudentTable({ setEditingStudent, setStudentForm }) {
  const studentsData = useSelector((state) => state.students.students);

  const dispatch = useDispatch()

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">
          Registered Students
        </h2>

        {/* <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Total Students: {studentsData.length}
        </span> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Full Name</th>
              <th className="px-6 py-4 text-left">Grade</th>
              <th className="px-6 py-4 text-left">Birth Date</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {studentsData.length > 0 ? (
              studentsData.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">{student.id}</td>

                  <td className="px-6 py-4 font-medium text-gray-700">
                    {student.fullName}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    Grade {student.grade}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {student.birthDate}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button onClick={() => {
                        setEditingStudent(student);
                        setStudentForm({
                          fullName: student.fullName,
                          grade: student.grade,
                          birthDate: student.birthDate,
                        });
                      }} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition duration-300">
                        Edit
                      </button>

                      <button onClick={()=> dispatch(deleteStudent(student.id))} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-8 text-gray-500"
                >
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

export default StudentTable;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeacher } from "../../Redux/teacherSlice.js";


function TeacherTable() {
  const teachersData = useSelector((state) => state.teachers.teachers);

  const dispatch = useDispatch()

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">
          Registered Teachers
        </h2>

        {/* <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Total Teachers: {teachersData.length}
        </span> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Full Name</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Subject</th>
              <th className="px-6 py-4 text-left">Birth Date</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {teachersData.length > 0 ? (
              teachersData.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">
                    {teacher.id}
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap min-w-[220px]">
                    {teacher.fullName}
                  </td>

                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    {teacher.phone}
                  </td>

                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    {teacher.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    {teacher.subject}
                  </td>

                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap min-w-[140px]">
                    {teacher.birthDate}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition duration-300">
                        Edit
                      </button>

                      <button onClick={() => dispatch(deleteTeacher(teacher.id))} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8 text-gray-500"
                >
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherTable;
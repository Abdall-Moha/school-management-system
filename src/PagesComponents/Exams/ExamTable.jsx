import { useDispatch, useSelector } from "react-redux";
import { deleteExam } from "../../Redux/examSlice.js";

function ExamTable({ setEditingExam, setExamForm }) {
  const examsData = useSelector((state) => state.exams.exams);

  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Scheduled Exams</h2>

        {/* <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Total Exams: {examsData.length}
        </span> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Exam Name</th>
              <th className="px-6 py-4 text-left">Subject</th>
              <th className="px-6 py-4 text-left">Class</th>
              <th className="px-6 py-4 text-left">Exam Date</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {examsData.length > 0 ? (
              examsData.map((exam) => (
                <tr
                  key={exam.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">{exam.id}</td>

                  <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap min-w-[220px]">
                    {exam.examName}
                  </td>

                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    {exam.subject}
                  </td>

                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    Grade {exam.grade}
                  </td>

                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap min-w-[140px]">
                    {exam.examDate}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button onClick={() => {
                        setEditingExam(exam);
                        setExamForm({
                          examName: exam.examName,
                          subject: exam.subject,
                          grade: exam.grade,
                          examDate: exam.examDate,
                        });
                      }} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition duration-300">
                        Edit
                      </button>

                      <button
                        onClick={() => dispatch(deleteExam(exam.id))}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  No exams scheduled.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamTable;

import { useDispatch, useSelector } from "react-redux";
import { addFinance } from "../../Redux/financeSlice.js";

function FinanceTable() {
  const studentsData = useSelector((state) => state.students.students);
  const financeData = useSelector((state) => state.finances.finances);

  const dispatch = useDispatch();

  const handleFinance = (studentId, status) => {
    dispatch(
      addFinance({
        id: financeData.length + 1,
        studentId,
        status,
      }),
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Students Finance</h2>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Total Students: {studentsData.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Full Name</th>
              <th className="px-6 py-4 text-left">Grade</th>
              <th className="px-6 py-4 text-center">Payment</th>
            </tr>
          </thead>

          <tbody>
            {studentsData.length > 0 ? (
              studentsData.map((student) => {
                const finance = financeData.find(
                  (item) => item.studentId === student.id,
                );

                return (
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

                    <td className="px-6 py-4 text-center">
                      {finance ? (
                        <div className="flex items-center justify-center gap-3">
                          <span
                            className={`font-bold ${
                              finance.status === "Paid"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {finance.status}
                          </span>

                          {finance.status === "Unpaid" && (
                            <button
                              onClick={() => handleFinance(student.id, "Paid")}
                              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
                            >
                              Mark Paid
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => handleFinance(student.id, "Paid")}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
                          >
                            Paid
                          </button>

                          <button
                            onClick={() => handleFinance(student.id, "Unpaid")}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                          >
                            Unpaid
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

export default FinanceTable;

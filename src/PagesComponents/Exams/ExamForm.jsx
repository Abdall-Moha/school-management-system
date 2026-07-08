import { useDispatch, useSelector } from "react-redux";
import { addExam, updateExam } from "../../Redux/examSlice.js";

function ExamForm({ editingExam, setEditingExam, examForm, setExamForm }) {
    const examData = useSelector((state) => state.exams.exams);

    const lastId =
        examData.length > 0
            ? Math.max(...examData.map((exam) => exam.id))
            : 0;

    const dispatch = useDispatch();

    const handleInput = () => {
        const { examName, subject, grade, examDate } = examForm;
        const exam = {
            id: editingExam ? editingExam.id : lastId + 1,
            examName,
            subject,
            grade,
            examDate,
        };

        if (
            examName.trim() !== "" &&
            subject.trim() !== "" &&
            grade.trim() !== "" &&
            examDate.trim() !== ""
        ) {
            if (editingExam) {
                dispatch(updateExam(exam));
                setEditingExam(null);
            } else {
                dispatch(addExam(exam));
            }

            setExamForm({
                examName: "",
                subject: "",
                grade: "",
                examDate: "",
            });
        } else {
            alert("Please fill all required fields.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    {editingExam ? "Update Exam" : "Schedule New Exam"}
                </h2>

                <p className="text-gray-500 mt-2">
                    {editingExam ? "Edit the exam information below." : "Fill in the exam information below."}
                </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Exam Name */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Exam Name
                    </label>

                    <input
                        type="text"
                        placeholder="e.g. Midterm Examination"
                        value={examForm.examName}
                        onChange={(e) => setExamForm({ ...examForm, examName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Subject
                    </label>

                    <select
                        value={examForm.subject}
                        onChange={(e) => setExamForm({ ...examForm, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                        <option value="" disabled>
                            Select Subject
                        </option>

                        <option value="Mathematics">Mathematics</option>
                        <option value="English">English</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Islamic Studies">Islamic Studies</option>
                    </select>
                </div>

                {/* Class */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Class
                    </label>

                    <select
                        value={examForm.grade}
                        onChange={(e) => setExamForm({ ...examForm, grade: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                        <option value="" disabled>
                            Select Class
                        </option>

                        {[...Array(12)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                Grade {index + 1}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Exam Date */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Exam Date
                    </label>

                    <input
                        type="date"
                        value={examForm.examDate}
                        onChange={(e) => setExamForm({ ...examForm, examDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>
            </div>

            {/* Button */}
            <div className="mt-8">
                <button
                    type="button"
                    onClick={handleInput}
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:scale-105 transition duration-300"
                >
                    {editingExam ? "Update Exam" : "Schedule Exam"}
                </button>
            </div>
        </div>
    );
}

export default ExamForm;

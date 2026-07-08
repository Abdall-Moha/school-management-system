import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../../Redux/studentSlice.js";

function StudentForm({ editingStudent, setEditingStudent, studentForm, setStudentForm }) {
    const studentData = useSelector((state) => state.students.students);


    const lastId =
        studentData.length > 0
            ? Math.max(...studentData.map((student) => student.id))
            : 0;
    // console.log(lastId)

    const dispatch = useDispatch();

    const handleInput = () => {
        const { fullName, grade, birthDate } = studentForm;
        const student = {
            id: editingStudent ? editingStudent.id : lastId + 1,
            fullName,
            grade,
            birthDate,
        };

        if (fullName.trim() !== "" && grade.trim() !== "" && birthDate.trim() !== "") {

            if (editingStudent) {
                dispatch(updateStudent(student));
                setEditingStudent(null);
            } else {
                dispatch(addStudent(student));
            }

            setStudentForm({
                fullName: "",
                grade: "",
                birthDate: "",
            });
        } else {
            alert("please fill the Required inputs")
        }

    };

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    {editingStudent ? "Update Student" : "Register New Student"}
                </h2>

                <p className="text-gray-500 mt-2">
                    {editingStudent ? "Edit the student information below." : "Fill in the student information below."}
                </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter student's full name"
                        value={studentForm.fullName}
                        onChange={(e) => setStudentForm({ ...studentForm, fullName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Grade */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Grade
                    </label>

                    <select
                        value={studentForm.grade}
                        onChange={(e) => setStudentForm({ ...studentForm, grade: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                        <option value="" disabled>
                            Select Grade
                        </option>

                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                        <option value="3">Grade 3</option>
                        <option value="4">Grade 4</option>
                        <option value="5">Grade 5</option>
                        <option value="6">Grade 6</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                    </select>
                </div>

                {/* Birth Date */}
                <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Birth Date
                    </label>

                    <input
                        type="date"
                        value={studentForm.birthDate}
                        onChange={(e) => setStudentForm({ ...studentForm, birthDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>
            </div>

            {/* Button */}
            <div className="mt-8">
                <button
                    type="submit"
                    onClick={handleInput}
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl transition duration-300"
                >
                    {editingStudent ? "Update Student" : "Register Student"}
                </button>
            </div>
        </div>
    );
}

export default StudentForm;

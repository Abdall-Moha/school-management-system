import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../Redux/studentSlice";

function StudentForm() {
    const [fullName, setFullName] = useState("");
    const [grade, setGrade] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const studentData = useSelector((state) => state.students.students).length;


    const lastId = studentData > 0 ? Math.max(studentData) : 0;
    // console.log(lastId)

    const dispatch = useDispatch();

    const handleInput = () => {
        const student = {
            id: lastId + 1,
            fullName,
            grade,
            birthDate,
        };

        if (fullName.trim() !== "" && grade.trim() !== "" && birthDate.trim() !== "") {

            dispatch(addStudent(student));

            setFullName("");
            setGrade("");
            setBirthDate("");
        } else {
            alert("please fill the Required inputs")
        }

    };

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Register New Student
                </h2>

                <p className="text-gray-500 mt-2">
                    Fill in the student information below.
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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Grade */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Grade
                    </label>

                    <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
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
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
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
                    Register Student
                </button>
            </div>
        </div>
    );
}

export default StudentForm;
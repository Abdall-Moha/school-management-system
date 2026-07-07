import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExam } from "../../Redux/examSlice";

function ExamForm() {
    const [examName, setExamName] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [examDate, setExamDate] = useState("");

    const examData = useSelector((state) => state.exams.exams);

    const lastId =
        examData.length > 0
            ? Math.max(...examData.map((exam) => exam.id))
            : 0;

    const dispatch = useDispatch();

    const handleInput = () => {
        const exam = {
            id: lastId + 1,
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
            dispatch(addExam(exam));

            setExamName("");
            setSubject("");
            setGrade("");
            setExamDate("");
        } else {
            alert("Please fill all required fields.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Schedule New Exam
                </h2>

                <p className="text-gray-500 mt-2">
                    Fill in the exam information below.
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
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Subject
                    </label>

                    <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
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
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
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
                        value={examDate}
                        onChange={(e) => setExamDate(e.target.value)}
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
                    Schedule Exam
                </button>
            </div>
        </div>
    );
}

export default ExamForm;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../Redux/teacherSlice.js";

function TeacherForm() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const teacherData = useSelector((state) => state.teachers.teachers).length;

    const lastId = teacherData > 0 ? Math.max(teacherData) : 0;

    const dispatch = useDispatch();


    
    const handleInput = () => {
        const teacher = {
            id: lastId + 1,
            fullName,
            phone,
            email,
            subject,
            birthDate,
        };
        
        if (fullName.trim() !== "" && phone.trim() !== "" && email.trim() !== "" && subject.trim() !== "" && birthDate.trim() !== "") {
    
            dispatch(addTeacher(teacher));
    
            setFullName("");
            setPhone("");
            setEmail("");
            setSubject("");
            setBirthDate("");
        } else {
            alert("please fill the required inputs")
        }
    };


    return (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Register New Teacher
                </h2>

                <p className="text-gray-500 mt-2">
                    Complete the form below to add a new teacher.
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
                        placeholder="Enter teacher's full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        <option value="" disabled>Select Subject</option>
                        <option>Mathematics</option>
                        <option>English</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>History</option>
                        <option>Geography</option>
                        <option>Computer Science</option>
                        <option>Islamic Studies</option>
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
                    type="button"
                    onClick={handleInput}
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:scale-105 transition duration-300"
                >
                    Register Teacher
                </button>
            </div>
        </div>
    );
}

export default TeacherForm;
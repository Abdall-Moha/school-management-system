import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/userSlice.js";

function UserForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userData = useSelector((state) => state.users.users).length;
  // console.log(userData)

  const lastId = userData > 0 ? Math.max(userData) : 0;
  // console.log(lastId)

  const dispatch = useDispatch();

  const handleInput = () => {
    const user = {
      id: lastId + 1,
      name,
      username,
      password,
    };

    if(name.trim() !== "" && username.trim() !== "" && password.trim() !== ""){

      dispatch(addUser(user));
  
      setName("");
      setUsername("");
      setPassword("");
    }else{
      alert("Please Fill All the Required Inputs")
    }

  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Register New User
      </h2>

      <p className="text-gray-500 mb-8">
        Fill in the information below to create a new user.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={handleInput}
        className="mt-8 w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition duration-300 hover:scale-105"
      >
        Register User
      </button>
    </div>
  );
}

export default UserForm;
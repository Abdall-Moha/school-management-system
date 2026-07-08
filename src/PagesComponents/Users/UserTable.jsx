import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/userSlice.js";


function UserTable({ setEditingUser, setUserForm }) {
  const usersData = useSelector((state) => state.users.users);

  const dispatch = useDispatch()

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">
          Registered Users
        </h2>

        {/* <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Total Users: {usersData.length}
        </span> */}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Username</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {usersData.length > 0 ? (
              usersData.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">{user.id}</td>

                  <td className="px-6 py-4 font-medium text-gray-700">
                    {user.name}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    @{user.username}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button onClick={() => {
                        setEditingUser(user);
                        setUserForm({
                          name: user.name,
                          username: user.username,
                          password: user.password,
                        });
                      }} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition">
                        Edit
                      </button>

                      <button onClick={() => dispatch(deleteUser(user.id))} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-8 text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;

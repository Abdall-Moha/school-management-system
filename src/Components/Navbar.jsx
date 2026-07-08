import { HiBars3 } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Navbar = ({ openSidebar }) => {

  const currentUser = useSelector(state => state.auth.currentUser)
  // console.log(currentUser)

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 shadow-sm">

      <div className="h-full flex items-center justify-between px-4 md:px-6">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={openSidebar}
            className="lg:hidden text-3xl text-slate-700 hover:text-blue-600 transition"
          >
            <HiBars3 />
          </button>

          {/* Page Title */}
          <div>

            <h1 className="text-xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="hidden md:block text-sm text-slate-500">
              Welcome back, {currentUser && currentUser.name} 
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          {/* <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">

            <HiOutlineMagnifyingGlass className="text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm w-full placeholder:text-gray-400"
            />

          </div> */}

          {/* Notification */}
          {/* <button className="relative w-10 h-10 rounded-full hover:bg-gray-100 transition flex items-center justify-center">

            <HiOutlineBell className="text-2xl text-slate-700" />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button> */}

          {/* Profile */}
          <button className="flex items-center gap-3">

            <div className="hidden sm:block text-right">

              <p className="text-lg font-semibold text-slate-700">
                {currentUser && currentUser.name}
              </p>

              {/* <p className="text-xs text-slate-500">
                Administrator
              </p> */}

            </div>

            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              A
            </div>

          </button>

        </div>

      </div>

    </header>
  );
};

export default Navbar;

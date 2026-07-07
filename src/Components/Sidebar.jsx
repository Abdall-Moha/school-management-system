import {
  HiOutlineXMark,
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineClipboardDocumentList,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import {logout} from '../Redux/authSlice.js'
import { useSelector } from "react-redux";



const Sidebar = ({ isOpen, closeSidebar }) => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth.currentUser)

  const handleLogOut = () =>{

    if(confirm("Are you sure you want to logOut")){
      dispatch(logout())
    }


  }


  const navLinkClass = ({ isActive }) =>
  `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 mb-1 ${
    isActive
      ? "bg-blue-600 text-white shadow-lg"
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
  }`;

  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 z-50
        w-64 h-screen
        bg-slate-900
        border-r border-slate-800
        flex flex-col
        transition-transform duration-300

        ${isOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }

        lg:translate-x-0
      `}
      >
        {/* Logo */}

        <div className="h-16 px-5 border-b border-slate-800 flex items-center justify-between">

          <div>
            <h1 className="text-xl font-bold text-white">
              SchoolMS
            </h1>

            <p className="text-xs text-slate-400">
              Management System
            </p>
          </div>

          <button
            onClick={closeSidebar}
            className="lg:hidden text-white text-2xl"
          >
            <HiOutlineXMark />
          </button>

        </div>

        {/* Menu */}

        <div className="flex-1 overflow-y-auto px-3 py-5">

          <p className="text-[11px] uppercase text-slate-500 tracking-widest mb-3 px-3">
            Main
          </p>

          <NavLink
            to="/dashboard"
            className={navLinkClass}
          >
            <HiOutlineHome className="text-lg" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/students"
            className={navLinkClass}
          >
            <HiOutlineAcademicCap className="text-lg" />
            <span>Students</span>
          </NavLink>


          <NavLink
            to="/teachers"
            className={navLinkClass}
          >
            <HiOutlineUserGroup className="text-lg" />
            <span>Teachers</span>
          </NavLink>

          <NavLink
            to="/users"
            className={navLinkClass}
          >
            <HiOutlineUsers className="text-lg" />
            <span>Users</span>
          </NavLink>

          <p className="text-[11px] uppercase text-slate-500 tracking-widest mt-8 mb-3 px-3">
            Academic
          </p>

          <NavLink
            to="/exams"
            className={navLinkClass}
          >
            <HiOutlineClipboardDocumentList className="text-lg" />
            <span>Exams</span>
          </NavLink>

          <NavLink
            to="/attendence"
            className={navLinkClass}
          >
            <HiOutlineCalendarDays className="text-lg" />
            <span>Attendence</span>
          </NavLink>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 p-3">

         

          <button onClick={handleLogOut} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-500/20 text-red-400 text-sm transition">
            <HiOutlineArrowLeftOnRectangle className="text-lg" />
            LogOut
          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;
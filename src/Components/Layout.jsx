import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Students from "../Pages/Students";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";


const Layout = ({ children }) => {

  const currentUser = useSelector(state => state.auth.currentUser)
  // const navigate = Navigate()
  // console.log(currentUser)

  // Controls whether the sidebar is open on mobile
  const [isOpen, setIsOpen] = useState(false);

  // Open sidebar
  const openSidebar = () => {
    setIsOpen(true);
  };

  // Close sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        closeSidebar={closeSidebar}
      />

      {/* Main Content */}
      <div className="lg:ml-64">

        {/* Navbar */}
        <Navbar
          openSidebar={openSidebar}
        />

        {/* Page Content */}
        <main className="p-6">

          {currentUser ? 
            children : 
            <Navigate to='/' replace />
          }

        </main>

      </div>

    </div>
  );
};

export default Layout;
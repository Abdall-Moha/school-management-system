import React from 'react'
import Layout from './Components/Layout.jsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import Students from './Pages/Students.jsx'
import Teachers from './Pages/Teachers.jsx'
import Users from './Pages/Users.jsx'
import Exams from './Pages/Exams.jsx'
import Attendence from './Pages/Attendence.jsx'
import Login from './Pages/Login.jsx'
import { useSelector } from 'react-redux'

function App() {
  

  return <>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/students' element={<Students />}></Route>
    <Route path='/teachers' element={<Teachers />}></Route>
    <Route path='/users' element={<Users />}></Route>
    <Route path='/exams' element={<Exams />}></Route>
    <Route path='/attendence' element={<Attendence />}></Route>

  </Routes>

  </>
}

export default App
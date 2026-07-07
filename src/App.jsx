import React from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Students from './Pages/Students'
import Teachers from './Pages/Teachers'
import Users from './Pages/Users'
import Exams from './Pages/Exams'
import Attendence from './Pages/Attendence'
import Login from './Pages/Login'
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
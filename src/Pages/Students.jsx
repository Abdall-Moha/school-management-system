import { useState } from 'react'
import Layout from '../Components/Layout.jsx'
import StudentForm from '../PagesComponents/Students/StudentForm.jsx'
import StudentTable from '../PagesComponents/Students/StudentTable.jsx'


function Students() {
  const [editingStudent, setEditingStudent] = useState(null)
  const [studentForm, setStudentForm] = useState({
    fullName: "",
    grade: "",
    birthDate: "",
  })

  return <>
  <Layout>
    <StudentForm
      editingStudent={editingStudent}
      setEditingStudent={setEditingStudent}
      studentForm={studentForm}
      setStudentForm={setStudentForm}
    />
    <StudentTable
      setEditingStudent={setEditingStudent}
      setStudentForm={setStudentForm}
    />
  </Layout>
  </>

}

export default Students

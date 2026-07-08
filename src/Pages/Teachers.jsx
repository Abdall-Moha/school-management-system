import { useState } from 'react'
import Layout from '../Components/Layout.jsx'
import TeacherForm from '../PagesComponents/Teachers/TeacherForm.jsx'
import TeacherTable from '../PagesComponents/Teachers/TeacherTable.jsx'


function Teachers() {
  const [editingTeacher, setEditingTeacher] = useState(null)
  const [teacherForm, setTeacherForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    birthDate: "",
  })

  return <>
  <Layout>
    <TeacherForm
      editingTeacher={editingTeacher}
      setEditingTeacher={setEditingTeacher}
      teacherForm={teacherForm}
      setTeacherForm={setTeacherForm}
    />
    <TeacherTable
      setEditingTeacher={setEditingTeacher}
      setTeacherForm={setTeacherForm}
    />
  </Layout>
  </>
}

export default Teachers

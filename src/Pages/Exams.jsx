import { useState } from 'react'
import Layout from '../Components/Layout.jsx'
import ExamForm from '../PagesComponents/Exams/ExamForm.jsx'
import ExamTable from '../PagesComponents/Exams/ExamTable.jsx'

function Exams() {
  const [editingExam, setEditingExam] = useState(null)
  const [examForm, setExamForm] = useState({
    examName: "",
    subject: "",
    grade: "",
    examDate: "",
  })

  return <>
  <Layout>
    <ExamForm
      editingExam={editingExam}
      setEditingExam={setEditingExam}
      examForm={examForm}
      setExamForm={setExamForm}
    />
    <ExamTable
      setEditingExam={setEditingExam}
      setExamForm={setExamForm}
    />
  </Layout>
  </>
}

export default Exams

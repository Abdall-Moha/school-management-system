import React from 'react'
import Layout from '../Components/Layout.jsx'
import ExamForm from '../PagesComponents/Exams/ExamForm.jsx'
import ExamTable from '../PagesComponents/Exams/ExamTable.jsx'

function Exams() {
  return <>
  <Layout>
    <ExamForm />
    <ExamTable />
  </Layout>
  </>
}

export default Exams
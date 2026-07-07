import React from 'react'
import Layout from '../Components/Layout'
import ExamForm from '../PagesComponents/Exams/ExamForm'
import ExamTable from '../PagesComponents/Exams/ExamTable'

function Exams() {
  return <>
  <Layout>
    <ExamForm />
    <ExamTable />
  </Layout>
  </>
}

export default Exams
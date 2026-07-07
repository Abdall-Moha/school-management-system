import React from 'react'
import Layout from '../Components/Layout'
import TeacherForm from '../PagesComponents/Teachers/TeacherForm'
import TeacherTable from '../PagesComponents/Teachers/TeacherTable'


function Teachers() {
  return <>
  <Layout>
    <TeacherForm />
    <TeacherTable />
  </Layout>
  </>
}

export default Teachers
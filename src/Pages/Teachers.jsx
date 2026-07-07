import React from 'react'
import Layout from '../Components/Layout.jsx'
import TeacherForm from '../PagesComponents/Teachers/TeacherForm.jsx'
import TeacherTable from '../PagesComponents/Teachers/TeacherTable.jsx'


function Teachers() {
  return <>
  <Layout>
    <TeacherForm />
    <TeacherTable />
  </Layout>
  </>
}

export default Teachers
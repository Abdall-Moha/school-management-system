import React from 'react'
import Layout from '../Components/Layout.jsx'
import StudentForm from '../PagesComponents/Students/StudentForm.jsx'
import StudentTable from '../PagesComponents/Students/StudentTable.jsx'


function Students() {
  return <>
  <Layout>
    <StudentForm />
    <StudentTable />
  </Layout>
  </>

}

export default Students
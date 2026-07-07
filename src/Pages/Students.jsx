import React from 'react'
import Layout from '../Components/Layout'
import StudentForm from '../PagesComponents/Students/StudentForm'
import StudentTable from '../PagesComponents/Students/StudentTable'


function Students() {
  return <>
  <Layout>
    <StudentForm />
    <StudentTable />
  </Layout>
  </>

}

export default Students
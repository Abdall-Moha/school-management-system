import React from 'react'
import Layout from '../Components/Layout'
import UserForm from '../PagesComponents/Users/UserForm.jsx'
import UserTable from '../PagesComponents/Users/UserTable.jsx'

function Users() {
  return <>
  <Layout>
    <UserForm />
    <UserTable />
  </Layout>
  </>
}

export default Users
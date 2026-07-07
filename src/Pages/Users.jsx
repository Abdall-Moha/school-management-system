import React from 'react'
import Layout from '../Components/Layout'
import UserForm from '../PagesComponents/Users/UserForm'
import UserTable from '../PagesComponents/Users/UserTable'

function Users() {
  return <>
  <Layout>
    <UserForm />
    <UserTable />
  </Layout>
  </>
}

export default Users
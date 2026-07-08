import { useState } from 'react'
import Layout from '../Components/Layout'
import UserForm from '../PagesComponents/Users/UserForm.jsx'
import UserTable from '../PagesComponents/Users/UserTable.jsx'

function Users() {
  const [editingUser, setEditingUser] = useState(null)
  const [userForm, setUserForm] = useState({
    name: "",
    username: "",
    password: "",
  })

  return <>
  <Layout>
    <UserForm
      editingUser={editingUser}
      setEditingUser={setEditingUser}
      userForm={userForm}
      setUserForm={setUserForm}
    />
    <UserTable
      setEditingUser={setEditingUser}
      setUserForm={setUserForm}
    />
  </Layout>
  </>
}

export default Users

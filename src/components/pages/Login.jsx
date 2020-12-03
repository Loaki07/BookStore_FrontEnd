import React, { useContext } from 'react'
import { BookStoreContext } from '../../context-api/BookStoreContext'

const Login = () => {
  const [users, setUsers] = useContext(BookStoreContext);

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        {onsubmit = (e) => {
          e.preventDefault()
          setUsers({toggleLogInSignUp: true, message: "updatedState"})
      }}
      <button type="submit">Submit</button>
      </form>
      <span>{users.message}</span>
    </div>
  )
}

export default Login

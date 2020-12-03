import React, { useContext } from 'react'
import { BookStoreContext } from '../../context-api/BookStoreContext'
import LoginForm from '../LoginForm.jsx'

const HomePage = () => {
  const [state, setState] = useContext(BookStoreContext);

  return (
    <div>
      <h1>HomePage</h1>
      <LoginForm/>
    </div>
  )
}

export default HomePage

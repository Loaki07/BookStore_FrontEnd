import React from 'react'
import './styles/errorMessage.scss'

const FormErrorMessage = (props) => {
  return (
    <div className="error-message text-left">
      {props.children}
    </div>
  )
}

export default FormErrorMessage

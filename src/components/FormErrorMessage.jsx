import React from 'react'

const FormErrorMessage = (props) => {
  return (
    <div className="error-message text-left">
      {props.children}
    </div>
  )
}

export default FormErrorMessage

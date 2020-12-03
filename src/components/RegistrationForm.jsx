import React, { useContext } from 'react';
import { BookStoreContext } from '../context-api/BookStoreContext'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormErrorMessage from './FormErrorMessage.jsx';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialValues = {
  fullName: "",
  emailId: "",
  password: "",
  mobileNumber: "",
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
                .min(3, 'Minimum 3 characters required!')
                .matches(/^[A-Za-z]+$/, "Cannot contain numbers!")
                .required('Required!'),
  emailId: Yup.string()
              .email("Invalid email format")
              .required("Required!"),
  password: Yup.string()
               .min(6, 'Minimum 6 characters required!')
               .required('Required!'),
  mobileNumber: Yup.string()
                   .min(10, 'Minimum 10 characters required!')
                   .required('Required!'),
})

const RegistrationForm = () => {
const [state, setState] = useContext(BookStoreContext);

  const updateFullName = (e) => {
    setState({ ...state, fullName: e.target.value })
  }

  const updateEmailId = (e) => {
    setState({ ...state, emailId: e.target.value })
  }

  const updatePassword = (e) => {
    setState({ ...state, password: e.target.value })
  }

  const updateMobileNumber = (e) => {
    setState({ ...state, mobileNumber: e.target.value })
  }

  const handleFormSubmit = () => {
    console.log("Form Register", state); 
  } 

  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values, handleBlur }) => (
          <FormikForm>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Field 
                  type="text" 
                  placeholder="Full Name" 
                  className="form-control"
                  name="fullName" 
                  value={values.fullName} 
                  onInput={handleChange}
                  onChange={updateFullName} 
                  autoComplete="off" 
                ></Field>
                <ErrorMessage 
                  name="fullName" 
                  component={FormErrorMessage} 
                ></ErrorMessage>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Id</Form.Label>
                <Field 
                      type="email" 
                      placeholder="Email Id" 
                      className="form-control"
                      name="emailId" 
                      value={values.emailId} 
                      onInput={handleChange}
                      onChange={updateEmailId} 
                      autoComplete="off" 
                    ></Field>
                    <ErrorMessage 
                      name="emailId" 
                      component={FormErrorMessage} 
                    ></ErrorMessage>
            </Form.Group>
            <Form.Group>
            <Form.Label>Password</Form.Label>
              <Field 
                    type="password" 
                    placeholder="Password" 
                    className="form-control"
                    name="password" 
                    value={values.password} 
                    onInput={handleChange}
                    onChange={updatePassword} 
                    autoComplete="off" 
                  ></Field>
                  <ErrorMessage 
                    name="password" 
                    component={FormErrorMessage} 
                  ></ErrorMessage>
            </Form.Group>
            <Form.Group>
            <Form.Label>Mobile Number</Form.Label>
              <Field 
                    type="text" 
                    placeholder="Mobile Number" 
                    className="form-control"
                    name="mobileNumber" 
                    value={values.mobileNumber} 
                    onInput={handleChange}
                    onChange={updateMobileNumber} 
                    autoComplete="off" 
                  ></Field>
                  <ErrorMessage 
                    name="mobileNumber" 
                    component={FormErrorMessage} 
                ></ErrorMessage>
            </Form.Group>
            <Form.Group>
              <Button 
                variant='danger'
                type='submit'
                onSubmit={handleSubmit}
                block
              >Signup</Button>
            </Form.Group>
          </FormikForm>
        )}
    </Formik>
  )
}

export default RegistrationForm

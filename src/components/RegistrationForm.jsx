import React, { useContext } from 'react';
import { BookStoreContext } from '../context-api/BookStoreContext'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormErrorMessage from './FormErrorMessage.jsx';
import UserApis from "../services/UserApis"
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()

const { registerNewUser } = new UserApis();

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

const RegistrationForm = (props) => {
const [state, setState] = useContext(BookStoreContext);

  const handleFormChange = (e) =>{
    setState({ ...state, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = async () => {
    try {
      console.log("Form Register", state); 
      const registerUserObject = {
        fullName: state.fullName,
        emailId: state.emailId,
        password: state.password,
        mobileNumber: state.mobileNumber
      }
      const result = await registerNewUser(registerUserObject);
      if (result.status === 200) {
        toast.success('Registration Successfull !', {position: toast.POSITION.TOP_CENTER});
        // props.history.push('/');
        console.log(result);
      }
    } catch (error) {
      toast.error(error.message, {position: toast.POSITION.TOP_CENTER});
    }
  } 

  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
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
                  onChange={handleFormChange} 
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
                      onChange={handleFormChange} 
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
                    onChange={handleFormChange} 
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
                    onChange={handleFormChange} 
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

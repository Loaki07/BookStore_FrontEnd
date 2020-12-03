import React, {useContext} from 'react'
import { BookStoreContext } from '../context-api/BookStoreContext'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormErrorMessage from './FormErrorMessage.jsx';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialValues = {
  emailId: "",
  password: "",
}

const validationSchema = Yup.object().shape({
  emailId: Yup.string()
              .email("Invalid email format")
              .required("Required!"),
  password: Yup.string()
               .min(6, 'Minimum 6 characters required!')
               .required('Required!'),
})

const LoginForm = () => {
  const [state, setState] = useContext(BookStoreContext);

  const updateEmail = (e) => {
    setState({...state, loginUserEmailId: e.target.value})
  }

  const updatePasssword = (e) => {
    setState({...state, loginUserPassword: e.target.value})
  }

  const handleFormSubmit = () => {
    console.log("From Submit", state);
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
              <Form.Label>Email Id</Form.Label>
              <Field 
                  type="email" 
                  placeholder="Email Id" 
                  className="form-control"
                  name="emailId" 
                  value={values.emailId} 
                  onInput={handleChange}
                  onChange={updateEmail} 
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
                    onChange={updatePasssword} 
                    autoComplete="off" 
                  ></Field>
                  <ErrorMessage 
                  name="password" 
                  component={FormErrorMessage} 
                ></ErrorMessage>
            </Form.Group>
            <Form.Group>
              <Button
                variant="secondary"
                type='button'
                size="sm"
              >Forgot Password?</Button>
            </Form.Group>
            <Form.Group>
              <Button 
                variant="danger"
                type='submit'
                onSubmit={handleSubmit}
                block
              >Login</Button>
            </Form.Group>
            <Form.Group>
              <span>or</span>
            </Form.Group>
            <Form.Row>
              <Form.Group>
                <Button 
                  variant="info"
                  type='button'
                >
                  FaceBook
                </Button>
                <Button 
                  variant="secondary"
                  type='button'
                >
                  Google
                </Button>
              </Form.Group>
            </Form.Row>
          </FormikForm>
        )}
    </Formik>
  )
}

export default LoginForm

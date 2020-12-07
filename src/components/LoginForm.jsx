import React, {useContext} from 'react'
import { BookStoreContext } from '../context-api/BookStoreContext'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormErrorMessage from './FormErrorMessage.jsx';
import { Form, Button } from 'react-bootstrap';
import UserApis from "../services/UserApis"
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
toast.configure()

const { logIn } = new UserApis();

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

const LoginForm = ({ history }) => {
  const [state, setState] = useContext(BookStoreContext);

  const handleFormChange = (e) =>{
    setState({ ...state, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = async () => {
    try {
      console.log("From Submit", state);
      const loginUserObject = {
        emailId: state.emailId,
        password: state.password
      }
      const result = await logIn(loginUserObject);
      if (result.status === 200) {
        toast.success('Login Successfull !', {
          position: toast.POSITION.TOP_CENTER
        })
        localStorage.setItem('token', result.data.token);
        // props.history.push('/dashboard');
        console.log(result);
      }
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      });
    }
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

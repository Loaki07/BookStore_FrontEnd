import React, { useContext } from 'react';
import { BookStoreContext } from '../context-api/BookStoreContext'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormErrorMessage from './FormErrorMessage.jsx';
import { Form, Button, Row, Col } from 'react-bootstrap';

const initialValues = {
  customerFullName: "",
  customerMobileNumber: "",
  customerAddress: "",
  customerCity: "",
  customerState: ""
}

const validationSchema = Yup.object().shape({
  customerFullName: Yup.string()
                .min(3, 'Minimum 3 characters required!')
                .matches(/^[A-Za-z]+$/, "Cannot contain numbers!")
                .required('Required!'),
  customerMobileNumber: Yup.string()
                    .min(10, 'Minimum 10 characters required!')
                    .required('Required!'),
  customerAddress: Yup.string()
              .max(120, 'Maximum of 120 Character allowed')
              .required("Required!"),
  customerCity: Yup.string()
           .required('Required!'),
  customerState: Yup.string()
            .required('Required!'),
})

const CustomerDetailsForm = () => {
  const [state, setState] = useContext(BookStoreContext);

  const handleFormChange = (e) =>{
    setState({ ...state, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = () => {
    // 
  }
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <FormikForm>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Field 
                      type="text" 
                      placeholder="Full Name" 
                      className="form-control"
                      name="customerFullName" 
                      value={values.customerFullName} 
                      onInput={handleChange}
                      onChange={handleFormChange} 
                      autoComplete="off" 
                    ></Field>
                    <ErrorMessage 
                      name="customerFullName" 
                      component={FormErrorMessage} 
                    ></ErrorMessage>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                    <Field 
                      type="text" 
                      placeholder="Mobile Number" 
                      className="form-control"
                      name="customerMobileNumber" 
                      value={values.customerMobileNumber} 
                      onInput={handleChange}
                      onChange={handleFormChange} 
                      autoComplete="off" 
                    ></Field>
                    <ErrorMessage 
                      name="customerMobileNumber" 
                      component={FormErrorMessage} 
                    ></ErrorMessage>
                  </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                    <Field 
                      as='textarea'
                      type="text" 
                      placeholder="Enter Address" 
                      className="form-control"
                      name="customerAddress" 
                      value={values.customerAddress} 
                      onInput={handleChange}
                      onChange={handleFormChange} 
                      autoComplete="off"
                      style={{
                        resize: 'none'
                      }} 
                    ></Field>
                    <ErrorMessage 
                      name="customerAddress" 
                      component={FormErrorMessage} 
                    ></ErrorMessage>
                </Form.Group>
              </Col>
            </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>City/Town</Form.Label>
                  <Field 
                    type="text" 
                    placeholder="Enter City/Town" 
                    className="form-control"
                    name="customerCity" 
                    value={values.customerCity} 
                    onInput={handleChange}
                    onChange={handleFormChange} 
                    autoComplete="off" 
                  ></Field>
                  <ErrorMessage 
                    name="customerCity" 
                    component={FormErrorMessage} 
                  ></ErrorMessage>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>State</Form.Label>
                  <Field 
                    type="text" 
                    placeholder="Enter State" 
                    className="form-control"
                    name="customerState" 
                    value={values.customerState} 
                    onInput={handleChange}
                    onChange={handleFormChange} 
                    autoComplete="off" 
                  ></Field>
                  <ErrorMessage 
                    name="customerState" 
                    component={FormErrorMessage} 
                  ></ErrorMessage>
                </Form.Group>
            </Col>
          </Row>
          </FormikForm>
        )}
      </Formik>
  )
}

export default CustomerDetailsForm

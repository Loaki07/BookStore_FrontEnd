import React, { useContext } from 'react'
import { BookStoreContext } from '../../context-api/BookStoreContext';
import { Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../LoginForm.jsx'
import RegistrationForm from '../RegistrationForm.jsx';
import '../styles/homepage.scss';
import '../../assets/book-store-logo.png';


const HomePage = () => {
  const [state, setState] = useContext(BookStoreContext);

  const toggleLogInForm = (e) => {
    setState({...state, toggleLogInSignUp: true})
  }

  const toggleRegisteredForm = (e) => {
    setState({...state, toggleLogInSignUp: false})
  }

  return (
    <div className="homepage-container">
      <div className="homepage-float-component">
      <Card style={{border: "2px solid black"}}>
        <Card.Img 
          variant="top" 
          alt="homepage-logo"
          src="test.png" 
          className="homepage-image"
          width="100px"
          height="200px"
        />
        <Card.Body>
          <Card.Title>ONLINE BOOK SHOPPING</Card.Title>
        </Card.Body>
      </Card>
      <Card 
        style={{border: "2px solid black"}}
      >
        <Card.Header>
          <Nav 
            variant="pills" 
            defaultActiveKey="#first"
            className="d-flex flex-row bd-highlight mb-3 justify-content-around"
          >
            <Nav.Item 
              className="bd-highlight"
            >
              <Nav.Link 
                href="#first"
                onClick={toggleLogInForm}
              >LOGIN</Nav.Link>
            </Nav.Item>
            <Nav.Item 
              className="bd-highlight"
            >
              <Nav.Link 
                href="#second"
                onClick={toggleRegisteredForm}
              >SIGNUP</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {
            state.toggleLogInSignUp ? 
            <LoginForm/> : 
            <RegistrationForm/>
          }
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default HomePage

import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bookLogo from  '../assets/education.svg';
import './styles/headerDashboard.scss'; 

const HeaderDashboard = () => {
  return (
    <>
      <Navbar 
        variant="dark"
        expand="lg"
        className="header-dashboard"
      >
        <Navbar.Brand href="#home">
          <img
            src={bookLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Book logo"
         />
         <span> Bookstore</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl 
              type="text" 
              placeholder="Search" 
              className="mr-sm-2" 
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
          </Nav>
      </Navbar>
    </>
  )
}

export default HeaderDashboard

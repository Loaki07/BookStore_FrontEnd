import React, {useContext} from 'react';
import { BookStoreContext } from '../../context-api/BookStoreContext';
import HeaderDashboard from '../HeaderDashboard.jsx';
import Footer from '../Footer.jsx';
import { Breadcrumb, Container, Accordion, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Cart = ({match, location, history}) => {
  const [state, setState] = useContext(BookStoreContext);

  const bookId = location.search && location.search.split('=')[1];

  return (
    <div>
      <HeaderDashboard />
      <Container>
      <Breadcrumb className='book-bread-crumb' >
          <LinkContainer to='/dashboard'>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </LinkContainer>
          <LinkContainer to={`/books/${bookId}`}>
            <Breadcrumb.Item>Back</Breadcrumb.Item>
          </LinkContainer>
          <LinkContainer to={`/cart`}>
            <Breadcrumb.Item active>
              My Cart({state.cart.length})
            </Breadcrumb.Item>
          </LinkContainer>
      </Breadcrumb>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            My Cart ({state.cart.length})
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>My Cart Details</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Customer Details
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Customer Details From</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Order Summary
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Order Summary Form</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Container>
      <Footer/>
    </div>
  )
}

export default Cart

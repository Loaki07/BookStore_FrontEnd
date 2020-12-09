import React, {useContext} from 'react';
import { BookStoreContext } from '../../context-api/BookStoreContext';
import HeaderDashboard from '../HeaderDashboard.jsx';
import Footer from '../Footer.jsx';
import CustomerDetailsForm from '../CustomerDetailsForm.jsx';
import { Breadcrumb, Container, Accordion, Card, Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
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
          <LinkContainer to={`/cart`}>
            <Breadcrumb.Item active>
              My Cart({state.cart.length})
            </Breadcrumb.Item>
          </LinkContainer>
      </Breadcrumb>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className="font-weight-bold">
              My Cart ({state.cart.length})
            </div> 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className='text-right'>
                <DropdownButton 
                id="dropdown-basic-button" 
                variant="none"
                defaultActiveKey='0'
                title="Use Current Location"
                >
                  <Dropdown.Item href="#/action-1" eventKey='0'>
                    Use Current Location
                  </Dropdown.Item>
            </DropdownButton>
              </div>
              { state.cart.map((book, idx) => (
                <Card 
                  className='m-1 p-1'
                  key={idx}
                  style={{
                    border: "none"
                  }}
                >
                  <Row>
                    <Col md={1}>
                      <Card.Img 
                        variant="top" 
                        src={book.image} 
                        style={{
                          width: '65px',
                          height: '85px'
                        }}
                      />
                    </Col>
                    <Col md={11} className='text-left'>
                        <div>
                          <h5>{book.title}</h5>  
                        </div>
                        <div>
                          <small className='font-weight-normal m-1 p-1'>
                          by {book.author}
                          </small>  
                        </div>
                        <div>  
                          <small className='m-1 p-1 font-weight-bold'>
                          Rs. {book.price}
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                ))
              }
              <div className='text-right'>
                <Button 
                  type='button'
                  variant='secondary'
                  // size='sm'
                >
                PLACE ORDER
                </Button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <div className="font-weight-bold">
              Customer Details
            </div> 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Row>
                <Col md={9}>
                  <CustomerDetailsForm />
                </Col>
                <Col md={3} className='d-flex justify-content-center align-items-center'>            
                  <Button 
                    type='select'
                    variant='secondary'
                    // size='sm'
                  >
                  Confim
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <div className="font-weight-bold">
              Order Summary
            </div> 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className='text-right'>
                <Button 
                  type='button'
                  variant='primary'
                  // size='sm'
                >
                Checkout
                </Button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Container>
      <Footer/>
    </div>
  )
}

export default Cart

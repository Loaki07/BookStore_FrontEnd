import React, {useContext} from 'react';
import HeaderDashboard from '../HeaderDashboard.jsx';
import Footer from '../Footer.jsx';
import { Breadcrumb, Container, Accordion, Card, Row, Col, Button } from 'react-bootstrap';
import { BookStoreContext } from '../../context-api/BookStoreContext';
import { LinkContainer } from 'react-router-bootstrap';
import { FaTrashAlt } from "react-icons/fa";

const Wishlist = ({match, location, history}) => {
  const [state, setState] = useContext(BookStoreContext);

  const bookId = location.search && location.search.split('=')[1];

  // const book = state.bookArray.find(bookitem => bookId === bookitem._id);

  const handeleDelete = (e) => {
    const tempWishlistArray = [...state.wishlist];
    const index = tempWishlistArray.indexOf(e.target.value)
    if (index !== -1) {
      tempWishlistArray.splice(index, 1);
      setState({...state, wishlist: tempWishlistArray})
    }
    console.log(e.target.value);
  }
  console.log(state.wishlist);

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
          <LinkContainer to={`/wishlist`}>
            <Breadcrumb.Item active>
              My Wishlist({state.wishlist.length})
            </Breadcrumb.Item>
          </LinkContainer>
      </Breadcrumb>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            My Wishlist ({state.wishlist.length})
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              { state.wishlist.map((book, idx) => (
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
                      <Col md={10} className='text-left'>
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
                      <Col md={1} className="d-flex justify-content-center align-items-center">
                        <Button
                          variant="outline-danger"
                          onClick={handeleDelete}
                          value={book._id}
                        >
                          <FaTrashAlt />  
                        </Button>
                      </Col>
                    </Row>
                  </Card>
              ))
              }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Container>
      <Footer />
    </div>
  )
}

export default Wishlist

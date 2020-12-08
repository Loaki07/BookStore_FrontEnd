import React, {useContext} from 'react';
import { BookStoreContext } from '../../context-api/BookStoreContext';
import HeaderDashboard from '../HeaderDashboard.jsx';
import Footer from '../Footer.jsx';
import { Breadcrumb, Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/book.scss'

const Book = ({ match, history }) => {
  const [state, setState] = useContext(BookStoreContext);

  const book = state.bookArray.find(bookitem => match.params.id === bookitem._id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setState({...state, cart: [...state.cart, book._id]});
    history.push(`/cart?bookId=${book._id}`);
  }

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    setState({...state, wishlist: [...state.wishlist, book._id]});
    history.push(`/wishlist?bookId=${book._id}`);
  }

  return (
    <>
      <HeaderDashboard/>
      <Container>
        <Breadcrumb className='book-bread-crumb' >
          <LinkContainer to='/dashboard'>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </LinkContainer>
          <LinkContainer to={`/books/${book._id}`}>
            <Breadcrumb.Item active>
              Book({book.title})
            </Breadcrumb.Item>
          </LinkContainer>
        </Breadcrumb>
        <Row>
          <Col md={3}>
            <div className='m-3 p-3 book-image-container text-center'>
              <Image 
                src={book.image}
                alt={`${book.title} image`} 
              />
            </div>
            <div className='m-2 p-2 d-flex justify-content-between'>
              <LinkContainer 
                to={`/cart?bookId=${book._id}`} 
                onClick={handleAddToCart}
              >
                <Button 
                  variant="danger"
                  type='button'
                  disabled={book.quantity === 0}
                  >ADD TO BAG</Button>
              </LinkContainer>
              <LinkContainer 
                to='/wishlist'
                onClick={handleAddToWishlist}
              >
                <Button 
                  variant="secondary"
                  type='button'
                >WISHLIST</Button>
              </LinkContainer>
            </div>
          </Col>
          <Col md={9}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{book.title}</h3>
                <div className='font-weight-normal m-1 p-1'>
                  by {book.author}
                </div>
                <div className='m-1 p-1'>Rating</div>
                <h5 className='m-1 p-1'>
                Rs. {book.price}
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                 Book Detail
                </h5> 
                <div>
                  {book.description}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Book

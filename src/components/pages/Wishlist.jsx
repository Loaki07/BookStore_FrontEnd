import React, {useContext} from 'react';
import HeaderDashboard from '../HeaderDashboard.jsx';
import Footer from '../Footer.jsx';
import { Breadcrumb, Container, Accordion, Card } from 'react-bootstrap';
import { BookStoreContext } from '../../context-api/BookStoreContext';
import { LinkContainer } from 'react-router-bootstrap';

const Wishlist = ({match, location, history}) => {
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
            <Card.Body>My Wishlist Details</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Container>
      <Footer />
    </div>
  )
}

export default Wishlist

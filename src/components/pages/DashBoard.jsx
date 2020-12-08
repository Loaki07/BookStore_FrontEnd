import React, { useContext, useEffect, useCallback } from 'react';
import { BookStoreContext } from '../../context-api/BookStoreContext';
import HeaderDashboard from '../HeaderDashboard.jsx';
import Footer from '../Footer.jsx';
import Paginate from '../Paginate.jsx';
import BookCard from '../BookCard.jsx';
import '../styles/dashboard.scss'
import { Container, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookApis from '../../services/BookApis';

const {getAllBooks, addBook, getAllBooksForPagination} = new BookApis();

const DashBoard = ({ match }) => {

  const [state, setState] = useContext(BookStoreContext);

  const pageNumber = match.params.pageNumber || 1;

  const getBooks = useCallback(async() => {
    try {
      const result = await getAllBooksForPagination(pageNumber);
      setState({...state, 
        bookArray: result.data.data, 
        pages: result.data.pages, 
        page: result.data.page
      })
    } catch (error) {
      console.log(error);
    }
  }, [setState, state, pageNumber]);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <>
      <HeaderDashboard />
      <Container className='main'>
        <div className="d-flex justify-content-between align-items-center m-1 p-2">
          <div className="font-weight-bold">
            Books ({state.bookArray.length})
          </div>
          <div>
            <DropdownButton 
              id="dropdown-basic-button" 
              variant="none"
              title="Sort By relevance"
            >
              <Dropdown.Item href="#/action-1">Sort by title</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sort by price</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sort by author</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <Row className="m-1 p-2">
          {state.bookArray.map((book, idx) => (
            <Col 
              key={idx}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <BookCard book={book} />
            </Col>
          ))} 
        </Row>
        <Paginate pages={state.pages} page={state.page} />
      </Container>
      <Footer/>
    </>
  )
}

export default DashBoard

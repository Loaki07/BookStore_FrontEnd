import React, { useContext, useEffect, useCallback } from 'react';
import { BookStoreContext } from '../../context-api/BookStoreContext';
import HeaderDashboard from '../HeaderDashboard.jsx';
import '../styles/dashboard.scss'
import { Container, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookApis from '../../services/BookApis';
// import books from  '../../assets/book.json'

const {getAllBooks, addBook} = new BookApis();

const DashBoard = () => {

  const [state, setState] = useContext(BookStoreContext);

  const getBooks = useCallback(async() => {
    try {
      const result = await getAllBooks();
      setState({...state, bookArray: result.data.data})
    } catch (error) {
      console.log(error);
    }
  }, [setState, state]);

  // const addBooks = () => {
  //   console.log(books);
  //   books.map(async book => {
  //     await addBook(book);
  //   })
  // };

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const test = () => {
    return state.bookArray.map((book, idx) => {
      let cardsArray =[];
      cardsArray.push(
      <Col key={idx}>
        book
      </Col>
      ) 
      return cardsArray;
    })
  }

  return (
    <>
      <HeaderDashboard/>
      <>
        <Container>
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
          <Row>
            {test()} 
          </Row>
        </Container>
      </>
      <footer className="dashboard-footer d-flex align-items-center">
        <span className="ml-5">
          Copyright © 2020, Bookstore Private Limited. All Rights Reserved
        </span>
      </footer>
    </>
  )
}

export default DashBoard

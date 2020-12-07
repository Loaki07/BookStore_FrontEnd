import ApiRequests from './ApiRequests';
import dotenv from 'dotenv';
dotenv.config();

const { get, post } = new ApiRequests();

class BookApis {
  getAllBooks = () => {
    const url = process.env.REACT_APP_BOOKSTORE_API_URL + `get-all-books`;
    return get(url);
  };

  getAllBooksForPagination = (pageNumber) => {
    const url =
      process.env.REACT_APP_BOOKSTORE_API_URL + `get-all-books?pageNumber=${pageNumber}`;
    return get(url);
  };

  addBook = (data) => {
    const url = process.env.REACT_APP_BOOKSTORE_API_URL + 'add-book';
    return post(url, data);
  };
}

export default BookApis;

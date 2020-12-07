import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bookCard.scss'

const BookCard = ({book}) => {
  return (
    <Card 
      className="m-3 p-3 rounded book-card"
    >
      <Link 
        to={`/books/${book._id}`}
        className="text-center"
      >
        <Card.Img 
          className='book-image'
          src={book.image}
          variant='top'
        />
      </Link>
      <Card.Body>
      <Link to={`/books/${book._id}`}>
        <Card.Title as='div'>
            <strong>
              {book.title}
            </strong>
        </Card.Title>
      </Link>
        <Card.Text 
          as='div'
        >
          <small className='font-weight-normal'>
            by {book.author}
          </small> 
        </Card.Text>
        <Card.Text 
          as='div'
        >
          <small className='font-weight-normal'>
            Ratings
          </small> 
        </Card.Text>
        <Card.Text 
          as='h5'
        >
          Rs. {book.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BookCard

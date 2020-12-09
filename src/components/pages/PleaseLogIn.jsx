import React from 'react';
import HeaderDashboard from '../HeaderDashboard.jsx';
import Footer from '../Footer.jsx';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from  '../../assets/please-log-in-logo.svg'
import '../styles/pleaseLogIn.scss'

const PleaseLogIn = () => {
  return (
    <>
      <HeaderDashboard />
      <div className='d-flex justify-content-center align-items-center'>
        <Card className='align-items-center please-log-in-card m-5 p-5'>
          <Card.Title as='div'>
            <div className='title-bold'>
              <h3>
                PLEASE LOG IN
              </h3>
            </div>
            <div className='light-text'>
              Login to view items in your wishlist
            </div>
          </Card.Title>
          <Card.Img 
            src={logo}
            style={{
              width: '66px',
              height: '73px',
              border: 'none'
            }}
          />
          <Card.Body>
            <Link to='/'>
              <Button
                type='button'
                variant='outline-danger'
              > 
                LOGIN/SIGNUP
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default PleaseLogIn

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import DashBoard from './components/pages/DashBoard.jsx';
import Book from './components/pages/Book.jsx';
import Cart from './components/pages/Cart.jsx';
import Wishlist from './components/pages/Wishlist.jsx';
import PleaseLogIn from './components/pages/PleaseLogIn.jsx';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page/:pageNumber" component={DashBoard} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/books/:id" component={Book} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/please-log-in" component={PleaseLogIn} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;

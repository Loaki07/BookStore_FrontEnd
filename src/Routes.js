import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import DashBoard from './components/pages/DashBoard.jsx';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Archives from './Archives';
import AuthenticatedRoute from './AuthenticatedRoute';
import Idea from './Idea';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import Signup from './Signup';
import Profile from './Profile';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="routes">
          <Navigation />
          <Route exact path="/" component={Home} />
          <AuthenticatedRoute exact path="/idea" component={Idea} />
          <AuthenticatedRoute exact path="/archives" component={Archives} />
          <AuthenticatedRoute exact path="/profile" component={Profile} />
          <AuthenticatedRoute
            exact
            path="/newsletters/:id"
            component={Newsletter}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </div>
  );
};

export default App;

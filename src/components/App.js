import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Archives from './Archives';
import Idea from './Idea';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Signup from './Signup';
import Profile from './Profile';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="routes">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/idea" component={Idea} />
          <Route exact path="/archives" component={Archives} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </div>
  );
};

export default App;

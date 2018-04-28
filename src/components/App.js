import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Signup from './Signup';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="routes">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </div>
  );
};

export default App;

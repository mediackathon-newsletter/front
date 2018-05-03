import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Archives from './Archives';
import Idea from './Idea';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import Signup from './Signup';
import Subscriptions from './Subscriptions';
import Profile from './Profile';

// Dashboard
import Dashboard from './dashboard/Dashboard';

// GraphQL
import requireAuthentication from './requireAuthentication';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="routes">
          <Navigation />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route exact path="/idea" component={requireAuthentication(Idea)} />
          <Route
            exact
            path="/archives"
            component={requireAuthentication(Archives)}
          />
          <Route
            exact
            path="/profile"
            component={requireAuthentication(Profile)}
          />
          <Route
            exact
            path="/newsletters/:id"
            component={requireAuthentication(Newsletter)}
          />
          <Route
            exact
            path="/subscriptions"
            component={requireAuthentication(Subscriptions)}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </div>
  );
};

export default App;

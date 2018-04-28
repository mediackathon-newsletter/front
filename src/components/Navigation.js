import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends Component {
  state = {
    authenticated: true
  };

  render() {
    return (
      <nav
        className="navigation navbar is-dark is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Newsletter
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a href="#" className="navbar-item">
              Mes archives
            </a>
          </div>
          <div className="navbar-end">
            {!this.state.authenticated ? (
              <Link to="/signup" className="navbar-item">
                Inscription
              </Link>
            ) : (
              <Link to="/profile" className="navbar-item">
                Preferences
              </Link>
            )}
            {!this.state.authenticated ? (
              <Link to="/login" className="navbar-item">
                Connexion
              </Link>
            ) : (
              <a
                className="navbar-item"
                onClick={e => this.setState({ authenticated: false })}
              >
                Deconnexion
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getUser } from '../helpers/Auth';

import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { user: getUser() };
    this.userLogout = this.userLogout.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match !== this.props.match) {
      this.setState({ user: getUser() });
    }
  }

  userLogout() {
    localStorage.removeItem('user');
    const { history } = this.props;
    history.push('/');
  }

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
          {this.state.user ? (
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a href="#" className="navbar-link">
                  Mon contenu
                </a>
                <div className="navbar-dropdown">
                  <Link to="/archives" className="navbar-item">
                    Archives
                  </Link>
                </div>
              </div>
              <Link to="/idea" className="navbar-item">
                Boite à idées
              </Link>
            </div>
          ) : null}

          <div className="navbar-end">
            {!this.state.user ? (
              <Link to="/signup" className="navbar-item">
                Inscription
              </Link>
            ) : (
              <Link to="/profile" className="navbar-item">
                Preferences
              </Link>
            )}
            {!this.state.user ? (
              <Link to="/login" className="navbar-item">
                Connexion
              </Link>
            ) : (
              <a className="navbar-item" onClick={this.userLogout}>
                Deconnexion
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);

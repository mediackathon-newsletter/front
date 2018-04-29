import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getUser } from '../helpers/Auth';

import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { user: getUser(), showBurger: false };
    this.userLogout = this.userLogout.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match !== this.props.match) {
      this.setState({ user: getUser() });
    }
  }

  showBurger() {
    this.setState({ showBurger: !this.state.showBurger });
  }

  userLogout() {
    localStorage.removeItem('user');
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <nav
        className="navigation navbar is-white has-background-light is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <i className="fas fa-newspaper fa-3x" />
          <Link to="/" className="navbar-item">
            CLF
          </Link>
          <a
            role="button"
            className={
              this.state.showBurger
                ? 'navbar-burger is-active'
                : 'navbar-burger'
            }
            aria-label="menu"
            aria-expanded="false"
            onClick={this.showBurger.bind(this)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={
            this.state.showBurger ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
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
                  <Link to="/subscriptions" className="navbar-item">
                    Abonnements
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
              <Link to="/signup" className="navbar-item has-text-danger">
                Essai gratuit
              </Link>
            ) : (
              <Link to="/profile" className="navbar-item">
                <i className="fas fa-sliders-h link" /> Preferences
              </Link>
            )}
            {!this.state.user ? (
              <Link to="/login" className="navbar-item">
                Connexion
              </Link>
            ) : (
              <a className="navbar-item" onClick={this.userLogout}>
                <i className="fas fa-sign-out-alt link" />
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import GET_USER from '../queries/getUser';
import LOGOUT from '../mutations/logout';

import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { showBurger: false };
  }

  showBurger() {
    this.setState({ showBurger: !this.state.showBurger });
  }

  render() {
    return (
      <Query query={GET_USER} fetchPolicy="network-only">
        {({ loading, error, data: { user }, refetch }) => {
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
                  this.state.showBurger
                    ? 'navbar-menu is-active'
                    : 'navbar-menu'
                }
              >
                {user ? (
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
                  {!user ? (
                    <Link to="/signup" className="navbar-item has-text-danger">
                      Essai gratuit
                    </Link>
                  ) : (
                    <Link to="/profile" className="navbar-item">
                      <i className="fas fa-sliders-h link" /> Preferences
                    </Link>
                  )}
                  {!user ? (
                    <Link to="/login" className="navbar-item">
                      Connexion
                    </Link>
                  ) : (
                    <Mutation
                      mutation={LOGOUT}
                      refetchQueries={[{ query: GET_USER }]}
                    >
                      {logout => (
                        <a className="navbar-item" onClick={logout}>
                          <i className="fas fa-sign-out-alt link" />
                        </a>
                      )}
                    </Mutation>
                  )}
                </div>
              </div>
            </nav>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Navigation);

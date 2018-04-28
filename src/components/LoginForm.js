import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    email: '',
    password: '',
    redirectToReferer: false
  };

  handleSubmit(e) {
    e.preventDefault();
    this.loginUser({
      email: this.state.email,
      password: this.state.password
    }).then(({ data }) => {
      if (!data[0]) {
        this.setState({ email: '', password: '' });
      } else {
        const user = data[0];
        const { history } = this.props;
        localStorage.setItem('user', user);
        this.setState({ redirectToReferer: true });
      }
    });
  }

  loginUser({ email, password }) {
    return axios.get(
      `http://localhost:4000/users?email=${email}&password=${password}`,
      {
        email,
        password
      }
    );
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.redirectToReferer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Mot de passe</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Mot de passe"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">
                Se connecter
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);

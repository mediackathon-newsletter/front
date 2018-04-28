import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    email: '',
    password: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
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

export default LoginForm;

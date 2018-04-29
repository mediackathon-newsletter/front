import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createUser, createSubscription } from '../helpers/Api';
import { storeUser } from '../helpers/Auth';
import CitiesForm from './CitiesForm';

import axios from 'axios';

class SignupForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    subscriptionCityId: null
  };

  handleCityChange(city) {
    this.setState({ subscriptionCityId: city });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { user } = this.state;

    createUser({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password
    }).then(({ data }) => {
      storeUser(data);
      createSubscription(
        { id: data.id },
        { id: this.state.subscriptionCityId }
      ).then(({ data }) => {
        const { history } = this.props;
        history.push('/');
      });
    });
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <section className="section">
            <h1 className="title is-4">Vous</h1>
            <div className="field">
              <label className="label">Prénom</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Prénom"
                  onChange={e =>
                    this.setState({
                      user: { ...this.state.user, lastname: e.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nom</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Nom"
                  onChange={e =>
                    this.setState({
                      user: { ...this.state.user, firstname: e.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Email"
                  onChange={e =>
                    this.setState({
                      user: { ...this.state.user, email: e.target.value }
                    })
                  }
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
                  onChange={e =>
                    this.setState({
                      user: { ...this.state.user, password: e.target.value }
                    })
                  }
                />
              </div>
            </div>
          </section>
          <section className="section">
            <h1 className="title is-4">Votre ville</h1>
            <div className="field">
              <div className="control">
                <CitiesForm cityChange={this.handleCityChange.bind(this)} />
              </div>
            </div>
          </section>
          <section>
            <div className="field">
              <div className="control has-text-centered">
                <button className="button is-primary is-large" type="submit">
                  S'inscrire
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);

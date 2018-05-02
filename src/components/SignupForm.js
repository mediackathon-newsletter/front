import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//GraphQL
import { Mutation } from 'react-apollo';
import SIGNUP_USER from '../mutations/signup';

const SignupForm = props => {
  let firstname, lastname, email, password;

  return (
    <div className="signup-form">
      <Mutation
        mutation={SIGNUP_USER}
        onCompleted={() => props.history.push('/')}
      >
        {(signup, { loading, error, data }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              signup({
                variables: {
                  firstname: firstname.value,
                  lastname: lastname.value,
                  email: email.value,
                  password: password.value
                }
              });
            }}
          >
            <section className="section">
              <h1 className="title is-4">Vous</h1>
              <div className="field">
                <label className="label">Prénom</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Prénom"
                    ref={input => {
                      lastname = input;
                    }}
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
                    ref={input => {
                      firstname = input;
                    }}
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
                    ref={input => {
                      email = input;
                    }}
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
                    ref={input => {
                      password = input;
                    }}
                  />
                </div>
              </div>
            </section>
            <section className="section">
              <h1 className="title is-4">Votre ville</h1>
              <div className="field">
                <div className="control" />
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
        )}
      </Mutation>
    </div>
  );
};

export default withRouter(SignupForm);

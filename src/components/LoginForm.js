import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

//GraphQL
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import GET_USER from '../queries/getUser';

const LoginForm = props => {
  let email, password;

  return (
    <div className="login-form">
      <Mutation
        mutation={LOGIN_USER}
        refetchQueries={[{ query: GET_USER }]}
        onCompleted={() => props.history.push('/')}
      >
        {(login, { data }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              login({
                variables: {
                  email: email.value,
                  password: password.value
                }
              });
            }}
          >
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
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Se connecter
                </button>
              </div>
            </div>
          </form>
        )}
      </Mutation>
    </div>
  );
};

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export default withRouter(LoginForm);

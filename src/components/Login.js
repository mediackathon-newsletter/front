import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <section className="section login">
      <div className="box">
        <h1 className="title is-2">Connexion</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;

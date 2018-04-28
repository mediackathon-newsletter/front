import React from 'react';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <section className="section signup">
      <div className="box">
        <h1 className="title is-2">Inscription</h1>
        <SignupForm />
      </div>
    </section>
  );
};

export default Signup;

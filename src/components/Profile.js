import React from 'react';
import Authenticated from './Authenticated';

const Profile = props => {
  return (
    <section className="section profile">
      <Authenticated>
        <div className="box">
          <h1 className="title is-2">Preferences</h1>
        </div>
      </Authenticated>
    </section>
  );
};

export default Profile;

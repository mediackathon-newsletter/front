import React from 'react';

const Profile = props => {
  return (
    <section className="section profile">
      <div className="box">
        <h1 className="title is-2">Preferences</h1>
        <div className="columns">
          <div className="column">
            <h2 className="subtitle is-3">Profil</h2>
            <div className="field is-grouped">
              <label className="label">Nom </label>
              <div className="control">
                <input className="input" type="text"/>
              </div>
              <label className="label">Prénom </label>
              <div className="control">
                <input className="input" type="text"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Age</label>
              <div className="control">
                <input className="input" type="number"/>
              </div>
            </div>
            <button className="button is-link">Editer</button>
          </div>
          <div className="column">
            <h2 className="subtitle is-3">Abonnement</h2>
            <div className="message is-info">
              <div className="message-header">
                <p>Votre abonnement actuel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

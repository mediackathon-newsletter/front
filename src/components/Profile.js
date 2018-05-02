import React, { Component } from 'react';
import { Query } from 'react-apollo';

import GET_PROFILE from '../queries/getProfile';

import './Profile.css';

class Profile extends Component {
  componentDidMount() {
    console.log(this.props.user);
  }

  render() {
    return (
      <section className="section profile">
        <Query query={GET_PROFILE}>
          {({ loading, error, data: { profile } }) => {
            if (loading) {
              return <div className="loading">Chargement...</div>;
            }
            if (error) {
              return <div className="error">Erreur...</div>;
            }

            return (
              <div className="box">
                <h1 className="title is-2">Mon profil</h1>
                <form>
                  {profile.journalist ? (
                    <div className="bio">
                      <h2 className="subtitle is-3">Bio</h2>
                      <div className="columns">
                        <div className="column">
                          <div className="field">
                            <div className="control">
                              <textarea
                                className="textarea"
                                value={profile.biography}
                                placeholder="Votre bio"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <h2 className="subtitle is-3">Social</h2>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">
                          <i class="fab fa-facebook" /> Facebook
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            value={profile.facebook}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">
                          <i class="fab fa-twitter" /> Twitter
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            value={profile.twitter}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">
                          <i class="fab fa-linkedin" /> LinkedIn
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            value={profile.linkedin}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="subtitle is-3">Mes coordonnées</h2>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Nom </label>
                        <div className="control">
                          <input
                            className="input"
                            value={profile.firstname}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Prénom </label>
                        <div className="control">
                          <input
                            className="input"
                            value={profile.lastname}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                          <input
                            className="input"
                            type="email"
                            value={profile.email}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Age</label>
                        <div className="control">
                          <input
                            className="input"
                            type="number"
                            value={profile.age}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">Adresse </label>
                        <div className="control">
                          <input
                            className="input"
                            value={profile.address}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Code postal </label>
                        <div className="control">
                          <input
                            className="input"
                            value={profile.cp}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Ville</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            value={profile.city}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="has-text-right">
                          <button
                            className="button is-primary is-large"
                            type="submit"
                          >
                            Sauvegarder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            );
          }}
        </Query>
      </section>
    );
  }
}

export default Profile;

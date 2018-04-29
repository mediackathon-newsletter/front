import React, { Component } from 'react';
import axios from 'axios';
import * as Auth from '../helpers/Auth';
import * as Api from '../helpers/Api';

class Profile extends Component {
  state = {};
  componentDidMount() {
    const currentUser = Auth.getUser();

    Api.fetchUser(currentUser.id).then(({ data }) => {
      this.setState({ profile: data });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Api.updateUser(this.state.profile);
  }

  render() {
    const { profile } = this.state;

    if (!profile) {
      return <div>Chargement</div>;
    }

    return (
      <section className="section profile">
        <div className="box">
          <h1 className="title is-2">Mon profil</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, facebook: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, twitter: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, linkedin: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, firstname: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, lastname: e.target.value }
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
                      type="email"
                      value={profile.email}
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, email: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, age: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, address: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, cp: e.target.value }
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          profile: { ...profile, city: e.target.value }
                        })
                      }
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
      </section>
    );
  }
}

export default Profile;

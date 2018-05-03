import React, { Component } from 'react';
import { Query, Mutation, graphql, compose } from 'react-apollo';

import GET_PROFILE from '../queries/getProfile';
import UPDATE_PROFILE from '../mutations/updateProfile';

import './Profile.css';

class Profile extends Component {
  state = {};

  render() {
    const { data: { loading, error, profile }, mutate } = this.props;

    if (loading) {
      return <div>Chargement...</div>;
    }
    if (error) {
      return <div>Error...</div>;
    }

    return (
      <section className="section profile">
        <div className="box">
          <h1 className="title is-2">Mon profil</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              mutate({
                variables: {
                  user: this.state
                }
              });
            }}
          >
            {this.state.journalist ? (
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
                    <i className="fab fa-facebook" /> Facebook
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      value={this.state.facebook || profile.facebook}
                      onChange={e =>
                        this.setState({ facebook: e.target.value })
                      }
                      type="text"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">
                    <i className="fab fa-twitter" /> Twitter
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      value={this.state.twitter || profile.twitter}
                      onChange={e =>
                        this.setState({
                          twitter: e.target.value
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
                    <i className="fab fa-linkedin" /> LinkedIn
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      value={this.state.linkedin || profile.linkedin}
                      onChange={e =>
                        this.setState({
                          linkedin: e.target.value
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
                      value={this.state.firstname || profile.firstname}
                      onChange={e =>
                        this.setState({
                          firstname: e.target.value
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
                      value={this.state.lastname || profile.lastname}
                      onChange={e =>
                        this.setState({
                          lastname: e.target.value
                        })
                      }
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
                      value={this.state.email || profile.email}
                      onChange={e =>
                        this.setState({
                          email: e.target.value
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
                      value={this.state.age || profile.age}
                      onChange={e =>
                        this.setState({
                          age: e.target.value
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
                      value={this.state.address || profile.address}
                      onChange={e =>
                        this.setState({
                          address: e.target.value
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
                      value={this.state.postalCode || profile.postalCode}
                      onChange={e =>
                        this.setState({
                          postalCode: e.target.value
                        })
                      }
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
                      value={this.state.city || profile.city}
                      onChange={e =>
                        this.setState({
                          city: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="has-text-centered">
                <button className="button is-primary is-large" type="submit">
                  Sauvegarder
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default compose(graphql(GET_PROFILE), graphql(UPDATE_PROFILE))(Profile);

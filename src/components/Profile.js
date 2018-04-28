import React, { Component } from 'react';
import axios from 'axios';
import { getUser } from '../helpers/Auth';

class Profile extends Component {
  state = {};
  componentDidMount() {
    const currentUser = getUser();

    axios
      .get(`http://localhost:4000/users/${currentUser.id}`)
      .then(({ data }) => this.setState({ profile: data }));

    axios
      .get(`http://localhost:4000/cities`)
      .then(({ data }) => this.setState({ cities: data }));
  }

  renderSubscription() {
    const { cities } = this.state;

    const { profile } = this.state;

    if (!cities) {
      return <div>Chargement...</div>;
    }

    const city = cities.find(c => c.id === parseInt(profile.cityId));

    return <div>{city.name}</div>;
  }

  render() {
    const { profile } = this.state;

    if (!profile) {
      return <div>Chargement</div>;
    }

    return (
      <section className="section profile">
        <div className="box">
          <h1 className="title is-2">Preferences</h1>
          <div className="columns">
            <div className="column">
              <h2 className="subtitle is-3">Vos informations</h2>
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
                  <input className="input" type="email" value={profile.email} />
                </div>
              </div>
              <div className="field">
                <label className="label">Age</label>
                <div className="control">
                  <input className="input" type="number" value={profile.age} />
                </div>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-3">Vos Abonnement</h2>
              <div className="message is-info">
                <div className="message-header">
                  <p>Votre abonnement actuel</p>
                  {this.renderSubscription()}
                </div>
              </div>
            </div>
          </div>
          <button className="button is-primary">Modifier</button>
        </div>
      </section>
    );
  }
}

export default Profile;

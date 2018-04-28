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
      .get(
        `http://localhost:4000/subscriptions?userId=${
          currentUser.id
        }&_expand=city&_expand=district`
      )
      .then(({ data }) => this.setState({ subscriptions: data }));
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderSubscription(subscription) {
    return (
      <tr>
        <td>{subscription.city.name}</td>
        <td>{subscription.district.name}</td>
        <td>
          <button className="button is-small is-rounded">
            <i class="fas fa-ban" />Desinscription
          </button>
        </td>
      </tr>
    );
  }

  renderSubscriptions() {
    const { subscriptions } = this.state;

    const { profile } = this.state;

    if (!subscriptions) {
      return <div>Chargement...</div>;
    }

    return (
      <div className="subscriptions">
        <table className="table is-fullwidth">
          <thead>
            <th>Ville</th>
            <th>Quartier</th>
            <th />
          </thead>
          <tbody>
            {subscriptions.map(subscription =>
              this.renderSubscription(subscription)
            )}
          </tbody>
        </table>
      </div>
    );
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
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="columns">
              <div className="column">
                <h2 className="subtitle is-3">Mes informations</h2>
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
                <h2 className="subtitle is-3">Mes Abonnement</h2>

                {this.renderSubscriptions()}
              </div>
            </div>
            <button className="button is-primary" type="submit">
              Modifier
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.renderDistrict = this.renderDistrict.bind(this);
  }

  state = {
    user: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      city_id: ''
    },
    cities: [],
    selectedCity: {},
    selectedDisctict: {}
  };

  fetchCities() {
    axios
      .get('http://localhost:4000/cities')
      .then(({ data }) => this.setState({ cities: data }));
  }

  componentDidMount() {
    this.fetchCities();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderDistrict() {
    const city = this.state.cities.find(
      c => c.id === parseInt(this.state.selectedCity)
    );

    if (!city || !city.districts) {
      return <div>plop</div>;
    }

    return (
      <div className="field">
        <label className="label">Quartier</label>
        <div className="control">
          <div className="select">
            <select
              value={this.state.selectedDisctict}
              onChange={e =>
                this.setState({ selectedDisctict: e.target.value })
              }
            >
              {city.districts.map(district => (
                <option key={district.id}>{district.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="signup-form">
        <section className="section">
          <h1 className="title is-4">Votre abonnement</h1>
          <div className="field">
            <label className="label">Ville</label>
            <div className="control">
              <div className="select">
                <select
                  value={this.state.selectedCity}
                  onChange={e =>
                    this.setState({ selectedCity: e.target.value })
                  }
                >
                  {this.state.cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {this.state.selectedCity ? this.renderDistrict() : null}
        </section>
        <section className="section">
          <h1 className="title is-4">Vous</h1>
          <div className="field">
            <label className="label">Prénom</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Prénom"
                onChange={e => this.setState({ lastname: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nom</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Prénom"
                onChange={e => this.setState({ firstname: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
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
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
        </section>

        <div className="field">
          <div className="control">
            <button className="button is-primary">S'inscrire</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;

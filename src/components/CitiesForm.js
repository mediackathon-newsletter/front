import React, { Component } from 'react';
import { fetchCities } from '../helpers/Api';

class CitiesForm extends Component {
  state = {
    selectedCity: null
  };

  componentDidMount() {
    fetchCities().then(({ data }) => this.setState({ cities: data }));
  }

  handleCityChange(e) {
    e.preventDefault();
    this.setState({ selectedCity: e.target.value });
    this.props.cityChange(e.target.value);
  }

  render() {
    const { cities } = this.state;

    if (!cities) {
      return <div>Chargement...</div>;
    }

    return (
      <div className="select is-fullwidth">
        <select
          value={this.state.selectedCity}
          onChange={this.handleCityChange.bind(this)}
        >
          <option key="default" value={null}>
            Selectionnez
          </option>
          {cities.map(city => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CitiesForm;

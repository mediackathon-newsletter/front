import React, { Component } from 'react';
import { Query } from 'react-apollo';
import GET_CITIES from '../queries/getCities';

class CitiesForm extends Component {
  state = {
    selectedCity: ''
  };

  handleCityChange(e) {
    e.preventDefault();
    this.setState({ selectedCity: e.target.value });
    this.props.cityChange(e.target.value);
  }

  render() {
    return (
      <Query query={GET_CITIES}>
        {({ loading, error, data: { cities } }) => {
          if (loading) {
            return <div>Chargement...</div>;
          }
          if (error) {
            return <div>Erreur...</div>;
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
        }}
      </Query>
    );
  }
}

export default CitiesForm;

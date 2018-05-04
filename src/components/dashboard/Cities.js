import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import CityItem from './CityItem';
import CityForm from './CityForm';
import GET_CITIES from '../../queries/getCities';
import CREATE_CITY from '../../mutations/createCity';
import UPDATE_CITY from '../../mutations/updateCity';
import DELETE_CITY from '../../mutations/deleteCity';

class Cities extends Component {
  state = {
    showCreateForm: false
  };

  toggleCreateForm() {
    this.setState({ showCreateForm: !this.state.showCreateForm });
  }

  createCity(city) {
    this.props.createCity({ variables: { ...city } });
  }

  updateCity(city) {
    this.props.updateCity({ variables: { city } });
  }

  deleteCity(id) {
    this.props.deleteCity({ variables: { id } });
  }

  render() {
    const { data: { loading, error, cities } } = this.props;

    if (loading) {
      return (
        <article className="message">
          <div className="message-body">
            <p>Chargement...</p>
          </div>
        </article>
      );
    }

    if (error) {
      return (
        <div className="message is-warning">
          <div className="message-body">
            <p>Erreur</p>
          </div>
        </div>
      );
    }

    return (
      <div className="cities container">
        {cities.map(city => (
          <CityItem
            key={city.id}
            city={city}
            updateAction={this.updateCity.bind(this)}
            deleteAction={this.deleteCity.bind(this)}
          />
        ))}
        {!this.state.showCreateForm ? (
          <div className="has-text-right">
            <button className="button" onClick={() => this.toggleCreateForm()}>
              Ajouter
            </button>
          </div>
        ) : (
          <CityForm
            createAction={this.createCity.bind(this)}
            toggle={this.toggleCreateForm.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default compose(
  graphql(GET_CITIES),
  graphql(CREATE_CITY, {
    name: 'createCity',
    options: { refetchQueries: [{ query: GET_CITIES }] }
  }),
  graphql(UPDATE_CITY, {
    name: 'updateCity',
    options: { refetchQueries: [{ query: GET_CITIES }] }
  }),
  graphql(DELETE_CITY, {
    name: 'deleteCity',
    options: { refetchQueries: [{ query: GET_CITIES }] }
  })
)(Cities);

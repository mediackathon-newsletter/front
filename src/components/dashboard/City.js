import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import Districts from './Districts';
import DistrictForm from './DistrictForm';
import CREATE_DISTRICT from '../../mutations/createDistrict';
import UPDATE_DISTRICT from '../../mutations/updateDistrict';
import DELETE_DISTRICT from '../../mutations/deleteDistrict';
import GET_CITY from '../../queries/getCity';

class City extends Component {
  state = {
    showDistrictForm: false
  };

  toggleCreateDistrictForm() {
    this.setState({ showDistrictForm: !this.state.showDistrictForm });
  }

  render() {
    const {
      createDistrict,
      updateDistrict,
      deleteDistrict,
      data: { loading, error, city }
    } = this.props;

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
      <div className="city container">
        <h1 className="title is-4 has-text-centered">{city.name}</h1>
        <h2 className="title is-5">Gestion des quartiers</h2>
        <Districts
          districts={city.districts}
          updateAction={district => {
            updateDistrict({
              variables: { district }
            });
          }}
          deleteAction={id => {
            deleteDistrict({
              variables: { id }
            });
          }}
        />

        {!this.state.showDistrictForm ? (
          <div className="has-text-right">
            <button
              className="button"
              onClick={() => this.toggleCreateDistrictForm()}
            >
              Ajouter
            </button>
          </div>
        ) : (
          <DistrictForm
            createAction={district => {
              createDistrict({
                variables: { name: district.name, city: city.id }
              });
            }}
            toggle={() => this.toggleCreateDistrictForm()}
          />
        )}
      </div>
    );
  }
}

export default compose(
  graphql(GET_CITY, {
    options: ownProps => ({ variables: { id: ownProps.match.params.id } })
  }),
  graphql(CREATE_DISTRICT, {
    name: 'createDistrict',
    options: ownProps => ({
      refetchQueries: [
        { query: GET_CITY, variables: { id: ownProps.match.params.id } }
      ]
    })
  }),
  graphql(UPDATE_DISTRICT, {
    name: 'updateDistrict',
    options: ownProps => ({
      refetchQueries: [
        { query: GET_CITY, variables: { id: ownProps.match.params.id } }
      ]
    })
  }),
  graphql(DELETE_DISTRICT, {
    name: 'deleteDistrict',
    options: ownProps => ({
      refetchQueries: [
        { query: GET_CITY, variables: { id: ownProps.match.params.id } }
      ]
    })
  })
)(City);

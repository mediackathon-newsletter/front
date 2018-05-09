import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import GET_CITIES from '../../queries/getCities';

const CitySelect = ({ onSelect, getCities: { cities, loading, error } }) => {
  if (loading) {
    return <div />;
  }

  if (error) {
    return <div />;
  }

  return (
    <div className="select is-fullwidth">
      <select
        onChange={e => {
          if (onSelect) {
            onSelect(cities.find(c => c.id === e.target.value));
          }
        }}
      >
        <option key="default" value="">
          Selectionnez une Ville
        </option>
        {cities.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default graphql(GET_CITIES, { name: 'getCities' })(CitySelect);

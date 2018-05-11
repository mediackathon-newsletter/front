import React, { Component } from 'react';
import { Query } from 'react-apollo';
import GET_DISTRICTS from '../../queries/getDistricts';

const DistrictSelect = ({ city, onSelect, district }) => {
  return (
    <Query query={GET_DISTRICTS} variables={{ city: city.id }}>
      {({ loading, error, data: { districts } }) => {
        if (loading) {
          return <div />;
        }

        if (error) {
          return <div />;
        }

        return (
          <div className="select is-fullwidth">
            <select
              value={district}
              onChange={e => {
                if (onSelect) {
                  onSelect(e.target.value);
                }
              }}
            >
              <option key="default" value="">
                Selectionnez un quartier
              </option>
              {districts.map(district => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
        );
      }}
    </Query>
  );
};

export default DistrictSelect;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import GET_USER from '../queries/getUser';

export default WrappedComponent => {
  return props => (
    <Query query={GET_USER} fetchPolicy="network-only">
      {({ loading, data }) => {
        console.log(data);
        if (loading && !data.user) {
          return <div>Chargement...</div>;
        }

        if (!loading && !data.user) {
          return <Redirect to="/login" />;
        }

        if (data.user) {
          return <WrappedComponent {...props} />;
        }
      }}
    </Query>
  );
};

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import GET_USER from '../queries/getUser';

export default WrappedComponent => {
  return props => (
    <Query query={GET_USER} fetchPolicy="network-only">
      {({ loading, data: { user } }) => {
        if (loading && !user) {
          return <div>Chargement...</div>;
        }

        if (!loading && !user) {
          return <Redirect to="/login" />;
        }

        if (user) {
          return <WrappedComponent {...props} user={user} />;
        }
      }}
    </Query>
  );
};

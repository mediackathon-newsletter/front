import React from 'react';
import { Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import GET_USER from '../queries/getUser';

export default WrappedComponent =>
  graphql(GET_USER, { fetchPolicy: 'network-only' })(props => {
    const { data: { loading, error, user } } = props;

    if (!loading && !user) {
      return <Redirect to="/login" />;
    }

    if (user) {
      return <WrappedComponent {...props} user={user} />;
    }

    return null;
  });

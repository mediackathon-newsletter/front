import gql from 'graphql-tag';

export default gql`
  query {
    subscriptions {
      id
      city {
        id
        name
      }
    }
  }
`;

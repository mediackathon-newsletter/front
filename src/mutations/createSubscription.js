import gql from 'graphql-tag';

export default gql`
  mutation createSubscription($city: ID!) {
    createSubscription(city: $city) {
      id
      city {
        id
        name
      }
    }
  }
`;

import gql from 'graphql-tag';

export default gql`
  query newsletters($city: ID!) {
    newsletters(city: $city) {
      id
      date
      type
    }
  }
`;

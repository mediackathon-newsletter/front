import gql from 'graphql-tag';

export default gql`
  query districts($city: ID!) {
    districts(city: $city) {
      id
      name
    }
  }
`;

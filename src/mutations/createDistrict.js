import gql from 'graphql-tag';

export default gql`
  mutation createDistrict($name: String!, $city: ID!) {
    createDistrict(name: $name, city: $city) {
      id
      name
    }
  }
`;

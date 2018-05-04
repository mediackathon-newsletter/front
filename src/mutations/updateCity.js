import gql from 'graphql-tag';

export default gql`
  mutation updateCity($city: CityInput!) {
    updateCity(city: $city) {
      id
      name
    }
  }
`;

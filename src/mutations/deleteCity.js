import gql from 'graphql-tag';

export default gql`
  mutation deleteCity($id: ID!) {
    deleteCity(id: $id) {
      id
    }
  }
`;

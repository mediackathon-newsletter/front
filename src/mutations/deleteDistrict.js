import gql from 'graphql-tag';

export default gql`
  mutation deleteDistrict($id: ID!) {
    deleteDistrict(id: $id) {
      id
    }
  }
`;

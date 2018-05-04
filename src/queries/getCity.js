import gql from 'graphql-tag';

export default gql`
  query city($id: ID!) {
    city(id: $id) {
      id
      name
      districts {
        id
        name
      }
    }
  }
`;

import gql from 'graphql-tag';

export default gql`
  mutation deleteNewsletter($id: ID!) {
    deleteNewsletter(id: $id) {
      id
    }
  }
`;

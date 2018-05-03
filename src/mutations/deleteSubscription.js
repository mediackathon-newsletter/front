import gql from 'graphql-tag';

export default gql`
  mutation deleteSubscription($id: ID!) {
    deleteSubscription(id: $id) {
      id
    }
  }
`;

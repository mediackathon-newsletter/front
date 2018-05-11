import gql from 'graphql-tag';

export default gql`
  mutation toggleEditingEvent($id: ID!) {
    toggleEditingEvent(id: $id) @client {
      id
    }
  }
`;

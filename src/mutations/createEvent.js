import gql from 'graphql-tag';

export default gql`
  mutation createEvent($event: EventInput!) {
    createEvent(event: $event) {
      id
    }
  }
`;

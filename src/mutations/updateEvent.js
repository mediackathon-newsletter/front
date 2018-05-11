import gql from 'graphql-tag';

export default gql`
  mutation updateEvent($event: EventInput!) {
    updateEvent(event: $event) {
      id
    }
  }
`;

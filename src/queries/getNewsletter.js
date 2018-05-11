import gql from 'graphql-tag';
// newsletter
export default gql`
  query newsletter($id: ID!) {
    newsletter(id: $id) {
      id
      type
      events {
        id
      }
      city {
        id
        name
      }
      journalist {
        firstname
        lastname
        linkedin
        facebook
        twitter
        biography
      }
    }
  }
`;

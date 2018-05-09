import gql from 'graphql-tag';
// newsletter
export default gql`
  query newsletter($id: ID!) {
    newsletter(id: $id) {
      id
      articles {
        id
        category {
          name
        }
        district {
          name
        }
        title
        subtitle
        text
      }
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

import gql from 'graphql-tag';

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

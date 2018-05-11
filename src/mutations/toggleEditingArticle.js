import gql from 'graphql-tag';

export default gql`
  mutation toggleEditingArticle($id: ID!) {
    toggleEditingArticle(id: $id) @client {
      id
    }
  }
`;

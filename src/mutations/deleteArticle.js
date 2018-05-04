import gql from 'graphql-tag';

export default gql`
  mutation deleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      id
    }
  }
`;

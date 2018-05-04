import gql from 'graphql-tag';

export default gql`
  mutation createArticle($article: ArticleInput!) {
    createArticle(article: $article) {
      id
    }
  }
`;

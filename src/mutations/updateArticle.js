import gql from 'graphql-tag';

export default gql`
  mutation updateArticle($article: ArticleInput!) {
    updateArticle(article: $article) {
      id
    }
  }
`;

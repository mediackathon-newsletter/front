import gql from 'graphql-tag';

export default gql`
  mutation updateNewsletter($newsletter: NewsletterInput!) {
    updateArticle(newsletter: $newsletter) {
      id
    }
  }
`;

import gql from 'graphql-tag';

export default gql`
  mutation createNewsletter($newsletter: NewsletterInput!) {
    createNewsletter(newsletter: $newsletter) {
      id
    }
  }
`;

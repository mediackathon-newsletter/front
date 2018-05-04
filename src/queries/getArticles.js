import gql from 'graphql-tag';

export default gql`
  query articles($newsletter: ID!) {
    articles(newsletter: $newsletter) {
      id
    }
  }
`;

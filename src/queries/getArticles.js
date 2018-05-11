import gql from 'graphql-tag';

export default gql`
  query articles($newsletter: ID!) {
    articles(newsletter: $newsletter) {
      id
      category {
        id
        name
      }
      district {
        id
        name
      }
      title
      subtitle
      text
      editing @client
    }
  }
`;

import gql from 'graphql-tag';

export default gql`
  query events($newsletter: ID!) {
    events(newsletter: $newsletter) {
      id
      title
      subtitle
      text
      date
      category {
        id
        name
      }
      district {
        id
        name
      }
      editing @client
    }
  }
`;

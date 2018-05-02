import gql from 'graphql-tag';

export default gql`
  query {
    cities {
      id
      name
    }
  }
`;

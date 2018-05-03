import gql from 'graphql-tag';

export default gql`
  {
    profile {
      email
      firstname
      lastname
      linkedin
      facebook
      twitter
      journalist
      biography
      street
      city
      postalCode
      birthday
    }
  }
`;

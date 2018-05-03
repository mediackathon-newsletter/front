import gql from 'graphql-tag';

export default gql`
  mutation updateUser($user: UserInput!) {
    updateProfile(user: $user) {
      id
      firstname
      lastname
      street
      city
      postalCode
      biography
      birthday
      email
      linkedin
      facebook
      twitter
    }
  }
`;

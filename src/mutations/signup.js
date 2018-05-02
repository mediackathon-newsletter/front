import gql from 'graphql-tag';
export default gql`
  mutation signup(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      id
      email
    }
  }
`;

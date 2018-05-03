import gql from 'graphql-tag';

export default gql`
  mutation createCity($name: String!) {
    createCity(name: $name) {
      id
      name
    }
  }
`;

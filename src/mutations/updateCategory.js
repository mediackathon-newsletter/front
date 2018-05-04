import gql from 'graphql-tag';

export default gql`
  mutation updateCategory($category: CategoryInput!) {
    updateCategory(category: $category) {
      id
      name
    }
  }
`;

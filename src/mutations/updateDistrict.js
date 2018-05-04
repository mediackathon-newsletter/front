import gql from 'graphql-tag';

export default gql`
  mutation districtCity($district: DistrictInput!) {
    districtCity(district: $district) {
      id
      name
    }
  }
`;

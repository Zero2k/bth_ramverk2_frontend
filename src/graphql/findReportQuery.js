import gql from 'graphql-tag';

export const findReportQuery = gql`
  query($id: Int!) {
    singleReport(id: $id) {
      id
      title
      text
      description
    }
  }
`;

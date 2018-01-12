import gql from 'graphql-tag';

export const reportQuery = gql`
  {
    allReports {
      id
      title
      text
      description
    }
  }
`;

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

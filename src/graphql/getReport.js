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

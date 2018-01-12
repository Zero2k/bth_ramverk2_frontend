import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import ReportText from '../components/ReportText';

import Loading from '../components/Loading';
import { findReportQuery } from '../graphql/report';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ViewReport = ({ data: { loading, singleReport } }) => {
  if (loading || !singleReport) {
    return <Loading />;
  }

  return (
    <Root>
      <ReportText report={singleReport} />
    </Root>
  );
};

export default graphql(findReportQuery, {
  options: (props) => ({
    variables: {
      id: props.match.params.id,
    },
  })
})(ViewReport);

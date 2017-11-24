import React from 'react';
import findIndex from 'lodash/findIndex';
import styled from 'styled-components';
import ReportText from '../components/ReportText';

import dataSet from '../data/data';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ViewReport = ({ match: { params: { id } } }) => ({
  render() {
    const reportId = id ? findIndex(dataSet, ['id', id]) : 0;
    const report = (reportId === -1) ? dataSet[0] : dataSet[reportId];

    return (
      <Root>
        <ReportText report={report} />
      </Root>
    );
  }
});

export default ViewReport;

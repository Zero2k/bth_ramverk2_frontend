import React from 'react';
import styled from 'styled-components';

import Assignment from '../components/Assignment';

const Root = styled.div``;

const ListContainer = ({ allReports, limit }) => {
  const reports = allReports.slice(0, limit);
  return (
    <Root>
      {reports.map(report => (<Assignment key={report.id} report={report} />))}
    </Root>
  );
};

export default ListContainer;

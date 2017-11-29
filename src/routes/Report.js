import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import ListContainer from '../containers/ListContainer';

import Loading from '../components/Loading';
import { reportQuery } from '../graphql/getReport';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Report = ({ data: { loading, allReports } }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <Root>
      <Header as='h2' align="center" content='Reports' />
      <ListContainer
        allReports={allReports.map(item => item)}
      />
    </Root>
  );
};

export default graphql(reportQuery)(Report);

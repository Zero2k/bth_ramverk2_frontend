import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

import ListContainer from '../containers/ListContainer';
import Loading from '../components/Loading';
import { reportQuery } from '../graphql/getReport';

const Root = styled.div``;

const Home = ({ data: { loading, allReports } }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <Root>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>Hello, world!</Header>
              <p style={{ fontSize: '1.33em' }}>
                This site is built with React.js and communicates with a server built with Express.js to access most of the data that is shown on the site.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>About me</Header>
              <p style={{ fontSize: '1.33em' }}>
                My name is Viktor and I'm 26 years old and live in Lund, Skåne. I'm currently studying Web Development at Blekinge Institute of Technology. Learn more about this site at <a href="https://github.com/Zero2k/bth_ramverk2">Github</a>
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='https://react.semantic-ui.com/assets/images/wireframe/white-image.png'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header
        as='h1'
        image='https://react.semantic-ui.com/assets/images/icons/school.png'
        content='Course Assignments'
        textAlign='center'
      />
      <Segment style={{ padding: '4em 0em' }} vertical>
        <ListContainer
          allReports={allReports.map(item => item)}
          limit='2'
        />
      </Segment>
    </Root>
  );
};

export default graphql(reportQuery)(Home);

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Container, Button } from 'semantic-ui-react';

const Root = styled.div`
  padding-bottom: 25px;
`;

const Assignment = ({ report }) => (
  <Root>
    <Container text>
      <Header className='title' as='h3' style={{ fontSize: '2em' }}>{report.title}</Header>
      <p style={{ fontSize: '0.9em' }}>
        {report.description}
      </p>
      <Button as={Link} to={`/report/${report.id}`} basic>Read More</Button>
    </Container>
  </Root>
);

export default Assignment;

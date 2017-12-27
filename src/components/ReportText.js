import React from 'react';
import styled from 'styled-components';
import { Header, Container, Divider } from 'semantic-ui-react';

const Root = styled.div``;

const ReportText = ({ report }) => (
  <Root>
    <Container text>
      <Header className='title' as='h3' style={{ fontSize: '2em' }} content={report.title} />
      <p style={{ fontSize: '1.20em' }}>
        {report.description}
      </p>
      <Divider />
      <p dangerouslySetInnerHTML={{ __html: report.text }} />
    </Container>
  </Root>
);

export default ReportText;

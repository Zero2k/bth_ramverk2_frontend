import React from 'react';
import styled from 'styled-components';
import {
  Container,
} from 'semantic-ui-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = styled.div``;

const Layout = ({ children }) => (
  <Root>
    <Navbar />
    <Container style={{ minHeight: '700px', display: 'grid' }}>
      {children}
    </Container>
    <Footer style={{ bottom: '0' }} />
  </Root>
);

export default Layout;

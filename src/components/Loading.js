import React from 'react';
import styled from 'styled-components';
import { Dimmer, Loader } from 'semantic-ui-react';

const Root = styled.div`
  padding-top: 50%;
`;

const Loading = () => (
  <Root>
    <Dimmer active inverted>
      <Loader size='large' inverted>Loading</Loader>
    </Dimmer>
  </Root>
);

export default Loading;

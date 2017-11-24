import React from 'react';
import styled from 'styled-components';
import { Segment, Header } from 'semantic-ui-react';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
`;

const About = () => (
  <Root>
    <Header as='h2' content='About' />
    <Segment piled>
      <p>Detta är en hemsida som är skapad i kursen ramverk2 som är en del av programmet webbprogrammering vid BTH. Sidan är skapad av Viktor Bengtsson som just nu läser webbprogrammering via BTH på distans.</p>
      <p>Hemsidan är skapad med hjälp av React och komunicerar med en API. Vill du veta mer om den här webbapplikationen så kan du läsa mer om det på <a href="https://github.com/Zero2k/bth_ramverk2">Github</a></p>
    </Segment>
  </Root>
);

export default About;

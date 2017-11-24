import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

const Root = styled.div``;

const Footer = () => ({
  render() {
    return (
      <Root>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Me</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Testing & CI' />
                  <List link inverted>
                    <List.Item as='a'>CircleCI</List.Item>
                    <List.Item as='a'>Travis</List.Item>
                    <List.Item as='a'>Better Code Hub</List.Item>
                    <List.Item as='a'>CodeClimate</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Ramverk2</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Root>
    );
  }
});

export default Footer;

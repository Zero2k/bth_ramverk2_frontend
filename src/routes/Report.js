import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Item, Button } from 'semantic-ui-react';

import dataSet from '../data/data';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const url = 'https://react.semantic-ui.com/assets/images/wireframe/image.png';

const item = ({ id, title, description }) => (
  <Item key={id}>
    <Item.Image size='small' src={url} />
    <Item.Content>
      <Item.Header as={Link} to={`/report/${id}`}>{title}</Item.Header>
      <Item.Description>
        <p>{description}</p>
        <Button as={Link} to={`/report/${id}`} basic>Read More</Button>
      </Item.Description>
    </Item.Content>
  </Item>
);

const Report = () => ({
  render() {
    return (
      <Root>
        <Header as='h2' content='Reports' />
        <Item.Group divided>
          {dataSet.map(item)}
        </Item.Group>
      </Root>
    );
  }
});

export default Report;

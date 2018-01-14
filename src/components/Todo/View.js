import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'semantic-ui-react';


const Root = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const ViewTodo = ({ data: { title, text, active } }) => (
  <Root>
    <List>
      <List.Item>
        <List.Header>Completed?</List.Header>
        {active ?
          <Icon.Group size='huge'>
            <Icon size='big' name='thin circle' />
            <Icon name='check' />
          </Icon.Group> :
          <Icon.Group size='huge'>
            <Icon size='big' color='red' name='dont' />
            <Icon name='check' />
          </Icon.Group>
        }
      </List.Item>
      <List.Item>
        <List.Header style={{ fontSize: '20px' }}>Title</List.Header>
        <p style={{ fontSize: '24px' }}>{title}</p>
      </List.Item>
      <List.Item>
        <List.Header style={{ fontSize: '20px' }}>Text</List.Header>
        <p style={{ fontSize: '24px' }}>{text}</p>
      </List.Item>
    </List>
  </Root>
);

export default ViewTodo;

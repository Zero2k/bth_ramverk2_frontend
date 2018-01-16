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
        {active ?
          <Icon.Group size='huge'>
            <Icon size='big' name='thin circle' />
            <Icon name='check' color='green' />
          </Icon.Group> :
          <Icon.Group size='huge'>
            <Icon size='big' color='red' name='dont' />
            <Icon name='check' />
          </Icon.Group>
        }
      </List.Item>
      <List.Item>
        <List.Header style={{ fontSize: '20px', color: '#4183c4' }}>Title</List.Header>
        <p style={{ fontSize: '24px', paddingTop: '10px', paddingBottom: '10px' }}>{title}</p>
      </List.Item>
      <List.Item>
        <List.Header style={{ fontSize: '20px', color: '#4183c4' }}>Text</List.Header>
        <p style={{ fontSize: '24px', paddingTop: '10px' }}>{text}</p>
      </List.Item>
    </List>
  </Root>
);

export default ViewTodo;

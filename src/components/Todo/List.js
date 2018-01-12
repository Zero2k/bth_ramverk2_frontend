import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, Icon } from 'semantic-ui-react';

const Root = styled.div`
`;

const Todo = ({ allTodos }) => (
  <Root>
    {allTodos.map(item => (
      <List divided relaxed>
        <List.Item key={item._id}>
          <List.Content floated='right'>
            <Icon size='large' name="edit" />
            <Icon size='large' name="remove" />
          </List.Content>
          <List.Icon name='tag' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as={Link} to={`/view/${item._id}`}>{item.title}</List.Header>
            <List.Description>{item.text}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    ))}
  </Root>
);

export default Todo;

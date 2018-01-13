import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, Icon } from 'semantic-ui-react';

const Root = styled.div`
`;

const Todo = ({ allTodos }) => (
  <Root>
    {allTodos.map(item => (
      <List divided relaxed key={item._id} >
        <List.Item >
          <List.Content floated='right'>
            <Link key={`todo-${item._id}`} to={`/todo/edit/${item._id}`}>
              <Icon size='large' name='edit' />
            </Link>
          </List.Content>
          {item.active ? <List.Icon name='checkmark' style={{ color: 'green' }} size='large' verticalAlign='middle' /> : <List.Icon name='checkmark' style={{ color: 'red' }} size='large' verticalAlign='middle' />}
          <List.Content>
            <List.Header as={Link} to={`/todo/view/${item._id}`} style={item.active ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{item.title}</List.Header>
            <List.Description>{item.text}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    ))}
  </Root>
);

export default Todo;

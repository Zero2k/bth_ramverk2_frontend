import React from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Header, Icon, Form, Checkbox, Button } from 'semantic-ui-react';

import { findSingleTodo } from '../../graphql/todos';

import Loading from '../../components/Loading';
import Edit from '../../components/Todo/Edit';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  min-width: 750px;
  margin: 0 auto;
`;

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      title: '',
      text: '',
      active: false,
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { id, title, text, active } = this.state;

    await this.props.mutate({
      variables: {
        id,
        title,
        text,
        active
      }
    });
    return this.setState({
      title: '',
      text: '',
      active: false,
    });
  };

  setCompleted = () => {
    this.setState({ active: !this.state.active });
  }

  updateState = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    const { data: { loading, singleTodo } } = this.props;

    if (loading || !singleTodo) {
      return <Loading />;
    }

    const { title, text, active } = singleTodo;

    return (
      <Root>
        <Header as='h2' icon textAlign='center'>
          <Icon name='list ul' circular />
          <Header.Content>
            Edit Todo
          </Header.Content>
        </Header>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Title</label>
            <input placeholder='Enter title' name="title" defaultValue={title} onChange={this.updateState} />
          </Form.Field>
          <Form.Field>
            <label>Text</label>
            <input placeholder='Enter text' name="text" defaultValue={text} onChange={this.updateState} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Completed' checked={active} onClick={this.setCompleted} />
          </Form.Field>
          <Button type='submit'>Save</Button>
        </Form>
      </Root>
    );
  }
}

const updateTodoMutation = gql`
  mutation($id: ID!, $title: String!, $text: String!, $active: Boolean!) {
    updateTodo(_id: $id, title: $title, text: $text, active: $active) {
      _id
    }
  }
`;

export default compose(
  graphql(updateTodoMutation),
  graphql(findSingleTodo, {
    options: props => ({
      variables: {
        id: props.match.params.id,
      },
    })
  })
)(EditTodo);

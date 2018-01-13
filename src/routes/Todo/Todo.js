import React from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';

import Loading from '../../components/Loading';
import List from '../../components/Todo/List';
import Create from '../../components/Todo/Create';

import { allTodosQuery } from '../../graphql/todos';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  min-width: 750px;
  margin: 0 auto;
`;

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { title, text } = this.state;

    await this.props.mutate({ variables: { title, text } });
    return this.setState({
      title: '',
      text: '',
    });
  };

  updateState = (e) => {
    console.log(e.target.name, ':', e.target.value);
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  };


  render() {
    const { data: { loading, allTodos } } = this.props;
    const { title, text } = this.state;

    if (loading || !allTodos) {
      return <Loading />;
    }

    return (
      <Root>
        <Header as='h2' icon textAlign='center'>
          <Icon name='list ul' circular />
          <Header.Content>
            My Todo List
          </Header.Content>
        </Header>
        <List allTodos={allTodos} />
        <Create
          title={title}
          text={text}
          updateState={this.updateState}
          onSubmit={this.onSubmit}
        />
      </Root>
    );
  }
}

const addTodoMutation = gql`
  mutation($title: String!, $text:String!) {
    createTodo(title: $title, text: $text) {
      title
      text
    }
  }
`;

export default compose(
  graphql(addTodoMutation),
  graphql(allTodosQuery, {
    options: { pollInterval: 5000 },
  })
)(Todo);

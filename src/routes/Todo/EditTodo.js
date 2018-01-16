import React from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';

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
      active: '',
    };
  }

  componentWillReceiveProps(newProps) {
    const { data: { loading, singleTodo } } = newProps;
    if (!loading) {
      const { title, text, active } = singleTodo;
      this.setState({
        title,
        text,
        active
      });
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const {
      id,
      title,
      text,
      active
    } = this.state;

    await this.props.mutate({
      variables: {
        id,
        title,
        text,
        active
      }
    });
    this.props.history.push('/todo');
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

    return (
      <Root>
        <Header as='h2' icon textAlign='center'>
          <Icon name='list ul' circular />
          <Header.Content>
            Edit Todo
          </Header.Content>
        </Header>
        <Edit
          onSubmit={this.onSubmit}
          data={singleTodo}
          updateState={this.updateState}
          setCompleted={this.setCompleted}
        />
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

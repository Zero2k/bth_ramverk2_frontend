import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';

import { findSingleTodo } from '../../graphql/todos';

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
      title: '',
      text: '',
      active: '',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    const { data: { singleTodo } } = this.props;

    return (
      <Root>
        <Header as='h2' icon textAlign='center'>
          <Icon name='list ul' circular />
          <Header.Content>
            Edit Todo
          </Header.Content>
        </Header>
      </Root>
    );
  }
}

export default graphql(findSingleTodo, {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  })
})(EditTodo);

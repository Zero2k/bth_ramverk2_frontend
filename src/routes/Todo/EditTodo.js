import React from 'react';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';

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
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <Root>
        <Header as='h2' icon textAlign='center'>
          <Icon name='list ul' circular />
          <Header.Content>
            EditTodo
          </Header.Content>
        </Header>
      </Root>
    );
  }
}

export default EditTodo;
/* export default graphql(findReportQuery, {
  options: (props) => ({
    variables: {
      id: props.match.params.id,
    },
  })
})(EditTodo); */

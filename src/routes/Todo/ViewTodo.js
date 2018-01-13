import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';

import Loading from '../../components/Loading';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;
let loading = false;
const ViewTodo = () => {
  if (loading) {
    return <Loading />;
  }

  return (
    <Root>
      <Header as='h2' icon textAlign='center'>
        <Icon name='list ul' circular />
        <Header.Content>
          View Todo
        </Header.Content>
      </Header>
    </Root>
  );
};

export default ViewTodo;
/* export default graphql(, {
  options: (props) => ({
    variables: {
      id: props.match.params.id,
    },
  })
})(ViewTodo); */

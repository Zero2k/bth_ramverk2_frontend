import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

import { findSingleTodo } from '../../graphql/todos';

import Loading from '../../components/Loading';
import View from '../../components/Todo/View';

const Root = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ViewTodo = ({ loading, data: { singleTodo } }) => {
  if (loading || !singleTodo) {
    return <Loading />;
  }

  return (
    <Root>
      <View data={singleTodo} />
    </Root>
  );
};

export default graphql(findSingleTodo, {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  })
})(ViewTodo);

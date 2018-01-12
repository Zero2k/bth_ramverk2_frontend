import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

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
      <p>ViewTodo</p>
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

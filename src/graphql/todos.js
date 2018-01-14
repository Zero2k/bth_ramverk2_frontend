import gql from 'graphql-tag';

export const allTodosQuery = gql`
  {
    allTodos {
      _id
      title
      text
    }
  }
`;

export const findSingleTodo = gql`
  query($id: ID!) {
    singleTodo(_id: $id) {
      _id
      title
      text
      active
    }
  }
`;

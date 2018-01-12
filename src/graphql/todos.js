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

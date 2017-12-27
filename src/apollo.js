import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';
// import { ApolloLink } from 'apollo-link';

const httpLink = createHttpLink({ uri: process.env.SERVER_IP || 'http://localhost:8080/graphql' });

const link = httpLink;

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

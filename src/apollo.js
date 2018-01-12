import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';
// import { ApolloLink } from 'apollo-link';

import constants from './utils/constants';

const httpLink = createHttpLink({ uri: `${constants.SERVER_IP}/graphql` });

const link = httpLink;

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

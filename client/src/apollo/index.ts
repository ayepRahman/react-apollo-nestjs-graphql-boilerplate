import { ApolloClient, split, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { cache } from 'apollo/cache';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || '';
const SERVER_WS_URL = process.env.REACT_APP_SERVER_WS_URL || '';

const httpLink = new HttpLink({
  uri: SERVER_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('x-token') || ''}`,
  },
});

const wsLink = new WebSocketLink({
  uri: SERVER_WS_URL,
  options: {
    reconnect: true,
  },
});

// The split function takes three parameters:
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: splitLink,
});

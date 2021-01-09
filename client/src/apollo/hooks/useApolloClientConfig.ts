/**
 * A custom  apollo client hook to include persisting apollo cache.
 */

import React from 'react';
import { ApolloClient, split, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { cache } from 'apollo/cache';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || '';
const SERVER_WS_URL = process.env.REACT_APP_SERVER_WS_URL || '';

/**
 * @desc - a hook function that set cache persist before client instantiate
 */
const useApolloClientConfig = () => {
  const [client, setClient] = React.useState<ApolloClient<NormalizedCacheObject>>(
    new ApolloClient({ cache })
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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

  React.useEffect(() => {
    setIsLoading(true);
    const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
      cache,
      link: splitLink,
    });
    // @desc we can set our init data here
    // cache.writeQuery({
    //   query: gql``,
    //   data: { cartItems: [{ name: 'asdasdasdasd' }] },
    // });

    persistCache({
      cache,
      storage: new LocalStorageWrapper(window.localStorage),
    }).then(() => {
      client.onResetStore(async () => {
        // @desc we can set our init data here e.g
      });
      setClient(client);
    });
    return () => {};
    // eslint-disable-next-line
  }, []);
  if (client === undefined) {
    setIsLoading(true);
  }

  return { client, isLoading };
};

export { useApolloClientConfig };

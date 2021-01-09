import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ThemeProvider } from 'styled-components';
import App from 'containers/App';
import theme from 'styles/theme';
import { useApolloClientConfig } from 'apollo/hooks/useApolloClientConfig';
import * as serviceWorker from './serviceWorker';

const Main: React.FC = () => {
  const { client } = useApolloClientConfig();

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <QueryParamProvider ReactRouterRoute={Route}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </QueryParamProvider>
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

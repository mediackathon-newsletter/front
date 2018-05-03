import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// GraphQL
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Components
import App from './components/App';

const GRAPHQL_URI = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  /*fetchOptions: {
    credentials: 'include'
  },*/
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id,
  uri: 'http://localhost:4000/graphql',
  request: async operation => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include'
      }
    });
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();

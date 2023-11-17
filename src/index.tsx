import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import { client } from './apollo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>
);

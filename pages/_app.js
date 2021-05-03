import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../styles/global';
import { SkeletonTheme } from 'react-loading-skeleton';
import { skeletonThemeProps } from '../styles/skeleton';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Normalize />
      <GlobalStyle />
      <SkeletonTheme {...skeletonThemeProps}>
        <Component {...pageProps} />
      </SkeletonTheme>
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;

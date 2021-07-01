import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/theme';
import { SkeletonTheme } from 'react-loading-skeleton';
import { skeletonThemeProps } from '../styles/skeleton';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache()
});

function App({ Component, pageProps }) {
  const theme = defaultTheme;
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <SkeletonTheme {...skeletonThemeProps}>
          <Component {...pageProps} />
        </SkeletonTheme>
      </ThemeProvider>
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default App;

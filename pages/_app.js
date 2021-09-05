import { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../styles/global';
import themes from '../styles/themes';
import { SkeletonTheme } from 'react-loading-skeleton';
import { skeletonThemeProps } from '../styles/skeleton';
import { useRouter } from 'next/router';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache()
});

function App({ Component, pageProps }) {
  const router = useRouter();
  const [theme, setTheme] = useState(themes.lightDefault);
  const changeTheme = themeName =>
    setTheme(themes[themeName] || themes.lightDefault);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <SkeletonTheme {...skeletonThemeProps}>
          <TransitionGroup>
            <CSSTransition
              key={router.pathname}
              classNames="page"
              timeout={500}
            >
              <Component {...pageProps} changeTheme={changeTheme} />
            </CSSTransition>
          </TransitionGroup>
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

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%
}
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.8rem;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.fade-exit,
.fade-enter-done {
   opacity: 1;
}

.fade-enter,
.fade-exit-active {
   opacity: 0;
}

[class^="fade"] {
     transition: opacity 500ms ease-in-out;
}
`;

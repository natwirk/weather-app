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

[class*="fade-"] {
  transition: opacity 500ms ease-in-out;
}

.page-exit,
.page-enter-done {
   opacity: 1;
}

.page-enter,
.page-exit-active {
   opacity: 0;
}

.page-enter
.page-enter-active,
.page-enter-done {
  position: relative;
  z-index: 2;
  transition: opacity 500ms ease-in-out;
}

.page-exit,
.page-exit-active,
.page-exit-done {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: opacity 500ms ease-in-out 300ms;
}
`;

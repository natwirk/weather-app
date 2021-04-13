import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%
}
body {
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 1.4rem
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

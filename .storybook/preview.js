import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../styles/global';

export const decorators = [
  Story => (
    <>
      <Normalize />
      <GlobalStyle />
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'sunny',
    values: [
      {
        name: 'sunny',
        value:
          'linear-gradient(0deg, rgba(255,250,215,1) 0%, rgba(176,236,255,1) 29%, rgba(26,140,255,1) 100%) fixed'
      },
      {
        name: 'rainy',
        value:
          'linear-gradient(0deg, rgba(228,228,228,1) 0%, rgba(132,161,187,1) 29%, rgba(88,117,172,1) 100%) fixed'
      }
    ]
  }
};

import { Normalize } from 'styled-normalize';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemes } from '@react-theming/storybook-addon';
import { GlobalStyle } from '../styles/global';
import { SkeletonTheme } from 'react-loading-skeleton';
import { skeletonThemeProps } from '../styles/skeleton';
import themes from '../styles/themes';

export const onThemeSwitch = context => {
  const { theme } = context;
  const background = theme.background.page
  const parameters = {
    backgrounds: {
      default: background,
    },
  };
  return {
    parameters,
  };
};

addDecorator(withThemes(ThemeProvider, Object.values(themes), { onThemeSwitch }));

export const decorators = [
  Story => (
    <>
      <Normalize />
      <GlobalStyle />
      <SkeletonTheme {...skeletonThemeProps}>
        <Story />
      </SkeletonTheme>
    </>
  )
];
import React from 'react';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { ThemeProvider, Global } from '@emotion/react';

import store, { useUiState } from '@src/store';
import { themeLight, themeDark } from '@src/styles/theme';
import globalStyles from '@src/styles/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const Root = ({ children }) => {
  const { isDark } = useUiState();

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

addDecorator((Story) => (
  <Provider store={store}>
    <Root>
      <Story />
    </Root>
  </Provider>
));

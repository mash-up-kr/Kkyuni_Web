// code reference: https://redux.js.org/usage/writing-tests#components
import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { themeLight, themeDark } from '@src/styles/theme';

// Import your own modules
import store, { useUiState } from '@src/store';

const Root = ({ children }: { children: ReactNode }): ReactElement => {
  const { isDark } = useUiState();

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      {children}
    </ThemeProvider>
  );
};
const render = (component: ReactElement) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>
      <Root>{children}</Root>
    </Provider>
  );
  return rtlRender(component, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

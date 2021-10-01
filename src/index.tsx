import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, Global } from '@emotion/react';

import App from '@src/App';
import store, { useUiState } from '@src/store';
import { themeLight, themeDark } from '@src/styles/theme';
import globalStyles from '@src/styles/globalStyles';

const Root = (): ReactElement => {
  const { isDark } = useUiState();

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);

import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import App from '@src/App';
import store, { useUiState } from '@src/store';
import { themeLight, themeDark } from '@src/styles/theme';
import globalStyles from '@src/styles/globalStyles';

const Root = (): ReactElement => {
  const { isDark } = useUiState();

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Global styles={globalStyles} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);

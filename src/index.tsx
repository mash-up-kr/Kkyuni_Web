import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, Global } from '@emotion/react';

import App from '@src/App';
import store from '@src/store';
import { themeLight, themeDark } from '@src/styles/theme';
import globalStyles from '@src/styles/globalStyles';

const Root = (): ReactElement => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Global styles={globalStyles} />
        <App isDark={isDark} setIsDark={setIsDark} />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

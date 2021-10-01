import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Global } from '@emotion/react';

import App from '@src/App';
import { themeLight, themeDark } from '@src/styles/theme';
import globalStyles from '@src/styles/globalStyles';

const Root = (): ReactElement => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Global styles={globalStyles} />
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

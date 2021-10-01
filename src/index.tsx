import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

import App from '@src/App';
import { themeLight, themeDark } from '@src/styles/theme';

const Root = (): ReactElement => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

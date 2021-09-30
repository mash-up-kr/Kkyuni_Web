import { css, Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
  },
  flexCol: (justifyContent = 'center', alignItems = 'center') => css`
    display: flex;
    flex-direction: column;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
  flexRow: (justifyContent = 'center', alignItems = 'center') => css`
    display: flex;
    flex-direction: row;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};

export default theme;

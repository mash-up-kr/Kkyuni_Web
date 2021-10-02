import { css, Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
    purple: '#4B13FE',
    green: '#DDF880',
    black: '#000000',
    'white-100': 'rgba(255,255,255,1)',
    'white-80': 'rgba(255,255,255,0.8)',
    'white-70': 'rgba(255,255,255,0.7)',
    'white-60': 'rgba(255,255,255,0.6)',
    'white-30': 'rgba(255,255,255,0.3)',
    'white-20': 'rgba(255,255,255,0.2)',
    'white-10': 'rgba(255,255,255,0.1)',
    yellow: '#FFFC15',
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

export const themeLight: Theme = {
  ...theme,
  text: '#000000',
  background: '#ffffff',
};

export const themeDark: Theme = {
  ...theme,
  text: '#ffffff',
  background: '#000000',
};

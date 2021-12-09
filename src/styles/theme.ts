import { css, Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
    purple: '#4B13FE',
    green: '#DDF880',
    black: '#000000',
    white100: 'rgba(255,255,255,1)',
    white80: 'rgba(255,255,255,0.8)',
    white70: 'rgba(255,255,255,0.7)',
    white60: 'rgba(255,255,255,0.6)',
    white30: 'rgba(255,255,255,0.3)',
    white20: 'rgba(255,255,255,0.2)',
    white10: 'rgba(255,255,255,0.1)',
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
  ellipse: (wrap = 'nowrap') => css`
    width: 100%;
    text-overflow: ellipsis;
    white-space: ${wrap};
    overflow: hidden;
    display: block;
  `,
  ellipseLine: (line = 4) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    word-wrap: break-word;
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

import '@emotion/react';
import { InterpolationWithTheme } from '@emotion/core';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      purple: string,
      green: string,
      black: string,
      'white100': string,
      'white80': string,
      'white70': string,
      'white60': string,
      'white30': string,
      'white20': string,
      'white10': string,
      yellow: string,
    };
    flexCol: (
      justifyContent?: string,
      alignItems?: string,
    ) => InterpolationWithTheme;
    flexRow: (
      justifyContent?: string,
      alignItems?: string,
    ) => InterpolationWithTheme;

    text?: string;
    background?: string;
  }
}

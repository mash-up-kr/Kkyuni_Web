import '@emotion/react';
import { InterpolationWithTheme } from '@emotion/core';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      purple: string,
      green: string,
      black: string,
      'white-100': string,
      'white-80': string,
      'white-70': string,
      'white-60': string,
      'white-30': string,
      'white-20': string,
      'white-10': string,
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

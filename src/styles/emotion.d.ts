import '@emotion/react';
import { InterpolationWithTheme } from '@emotion/core';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      black: string;
      white: string;
      red: string;
    };
    flexCol: (
      justifyContent?: string,
      alignItems?: string,
    ) => InterpolationWithTheme;
    flexRow: (
      justifyContent?: string,
      alignItems?: string,
    ) => InterpolationWithTheme;
  }
}

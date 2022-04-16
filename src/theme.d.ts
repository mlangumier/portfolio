import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    // typography: {
    //   fontFamily: string;
    // }
  }
  interface CustomThemeOptions extends ThemeOptions {
    // typography?: {
    //   fontFamily?: string;
    // }
  }
  export function createTheme(options: CustomThemeOptions): CustomTheme
}

// @dev configuration to work with typescipt - https://styled-components.com/docs/api#typescript
import 'styled-components';
import { ColorsEnum } from 'styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // allow us to iterate enums key type it as a string
      [key in keyof typeof ColorsEnum]: string;
    };
    // font: {
    //   size: {
    //     sm: string;
    //     md: string;
    //     lg: string;
    //     xl: string;
    //   };
    //   weight: {
    //     light: number;
    //     regular: number;
    //     medium: number;
    //     bold: number;
    //     black: number;
    //   };
    // };
    // padding: {
    //   xs: string;
    //   sm: string;
    //   md: string;
    //   lg: string;
    // };
    // margin: {
    //   xs: string;
    //   sm: string;
    //   md: string;
    //   lg: string;
    // };
    // line: {
    //   height: {
    //     xs: string;
    //     sm: string;
    //     md: string;
    //     lg: string;
    //     xl: string;
    //   };
    // };
    // zIndex: {};
    // boxShadow: {
    //   one: string;
    //   two: string;
    // };
    // mediaQuery: {
    //   mobile: string;
    //   tablet: string;
    //   laptop: string;
    //   desktop: string;
    //   lgDesktop: string;
    //   xlDesktop: string;
    // };
  }
}

import { DefaultTheme } from 'styled-components';

export enum ColorsEnum {
  // background = '#182f35',
  primary = 'palevioletred',
}

export type ColorsType = keyof typeof ColorsEnum;

const theme: DefaultTheme = {
  colors: ColorsEnum,
};

export default theme;

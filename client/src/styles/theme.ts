import { DefaultTheme } from 'styled-components';

export enum ColorsEnum {
  amazonorange = '#FF9900',
  amazonnavbar = '#131921',
  secondary = '#FFBAAB',
  success = '#85B899',
  error = '#F5734D',
  white = '#FFFFFF',
}

export type ColorsType = keyof typeof ColorsEnum;

const theme: DefaultTheme = {
  colors: ColorsEnum,
};

export default theme;

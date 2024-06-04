import { defaultTheme } from "../styles/theme/defaul";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

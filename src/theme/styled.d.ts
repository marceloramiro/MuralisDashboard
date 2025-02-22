/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import { theme } from ".";

declare module "styled-components" {
  type Theme = typeof theme;
  interface DefaultTheme extends Theme {}
}

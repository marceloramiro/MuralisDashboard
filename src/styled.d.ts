import "styled-components";
import { theme } from "./Theme";

declare module "styled-components" {
  type DefaultTheme = typeof theme;
}

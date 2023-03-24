import 'styled-components'
import { DefaultThemes } from "../styles/themes/DefaultThemes";

type ThemeTypes = typeof DefaultThemes;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeTypes {}
}
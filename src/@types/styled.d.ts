import 'styled-components'
import { DefaultThemes } from "../styles/themes/DefaultThemes";

const ThemeTypes = typeof DefaultThemes;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeTypes {}
}
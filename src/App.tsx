import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { DefaultThemes } from "./styles/themes/DefaultThemes";

export function App() {

  return (
    <ThemeProvider theme={DefaultThemes}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}



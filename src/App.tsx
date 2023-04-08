import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './styles/themes/DefaultThemes'
import { CoffeesContextProvider } from './contexts/CoffeesContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <CoffeesContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyles />
        </BrowserRouter>
      </CoffeesContextProvider>
    </ThemeProvider>
  )
}

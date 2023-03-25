import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";

export function App() {

  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  )
}



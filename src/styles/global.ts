import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    @media (max-width: 1200px) {
        font-size: 93.75%;
    }
    @media (max-width: 768px) {
        font-size: 87.5%;
    }     
}

body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
}

textarea, input, button, strong {
    font-family: "Roboto", sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}

:focus {
    outline: 2px solid ${props => props.theme['yellow']};
}

`

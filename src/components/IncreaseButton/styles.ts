import styled from "styled-components";

export const Button = styled.button`

padding: 0.5rem;
border-radius: 4px;
border: 0;
height: 2.5rem;
display: flex;
justify-content: space-between;
align-items: center;

margin-left: auto;
width: 4rem;

background-color: ${(props) => props.theme['base-200']};
svg {
    color: ${(props) => props.theme.purple};
    &:hover {
        color: ${(props) => props.theme['purple-dark']};
    }
}
`
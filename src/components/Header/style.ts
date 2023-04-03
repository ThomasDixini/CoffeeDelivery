import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      padding: 0.5rem 1rem;
      border-radius: 4px;

      display: flex;
      align-items: center;
      gap: 1rem;
    }
    a {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      padding: 0.5rem;
      border-radius: 4px;

      display: flex;
      align-items: center;
      gap: 1rem;

      transition: all 0.15s;

      &[href="/checkout"]:hover {
        background-color: ${props => props.theme['yellow']};
        color: ${(props) => props.theme['white']};
      }
    }
  }
`

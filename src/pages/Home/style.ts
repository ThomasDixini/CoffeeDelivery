import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const SloganSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  margin-top: 2rem;
  padding: 1rem;

  div {
    max-width: 700px;

    h2 {
      font-size: 3rem;
      font-weight: bold;
      font-family: 'Baloo 2', sans-serif;
      line-height: 1.3;
    }
    p {
      margin-top: 1rem;
      font-size: 1.2rem;
      line-height: 1.3;
    }
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 2rem;
      span {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        svg {
          color: white;
          border-radius: 50%;
          padding: 0.5rem;
          margin-right: 0.5rem;
          &.shopping-cart {
            background-color: ${(props) => props.theme['yellow-dark']};
          }
          &.timer {
            background-color: ${(props) => props.theme.yellow};
          }
          &.package {
            background-color: ${(props) => props.theme['base-500']};
          }
          &.coffee {
            background-color: ${(props) => props.theme.purple};
          }
        }
      }
    }
  }
`

export const CoffeeListSection = styled.div`
  margin: 2rem 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }

  form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
  }
`

export const CoffeeItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px 20px 4px 20px;
  background-color: ${(props) => props.theme['base-50']};
  padding: 1rem 2rem;

  img {
    margin-top: -32px;
  }

  strong {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-600']};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-400']};
    margin: 1rem 0 2rem;
    text-align: center;
  }
  div {
    margin-top: auto;
    width: 100%;
    display: flex;
    gap: 0.5rem;

    span {
      font-weight: bold;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-500']};

      &::before {
        content: 'R$';
        font-size: 14px;
        font-weight: normal;
      }
    }
    button {
      padding: 0.5rem;
      border-radius: 4px;
      border: 0;
      height: 2.5rem;
    }
    button[type='submit'] {
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      &:hover {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`

export const Subtitle = styled.header`
  width: 100%;
  margin-top: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  font-size: 70.5%;

  b {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.25rem 0.5rem;
    border-radius: 20px;
  }
`

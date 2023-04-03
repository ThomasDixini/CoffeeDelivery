import styled from "styled-components";

export const CheckoutMain = styled.main`
max-width: 1200px;
width: 100%;
display: flex;
gap: 2rem;
margin: 0 auto;
`
export const AdressContainer = styled.section`
display: flex;
flex-direction: column;
flex: 1;
gap: 1rem;

`
export const AdressSelection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: ${props => props.theme['base-50']};
`
export const CreditCardSelection = styled.div`
    padding: 2.5rem;
    background-color: ${props => props.theme['base-50']};
`
export const CartContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    background-color: ${props => props.theme['base-50']};
`
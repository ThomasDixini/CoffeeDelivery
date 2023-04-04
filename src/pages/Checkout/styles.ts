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

    header {
        display: flex;
        gap: 1rem;
        justify-content: flex-start;
        align-items: flex-start;

        svg {
            color: ${props => props.theme['yellow-dark']};
        }
        div {
            display: inline;
            p {
                font-size: 0.875rem;
            }
        }
    }

    div {
        display: grid;
        grid-column-gap: 0.5rem;
        grid-template-columns: 1fr 2fr 50px;
        grid-template-areas:
        "cep . ." 
        "rua rua rua"
        "numero complemento complemento"
        "bairro cidade uf";
        input {
            margin-top: 1rem;
            padding: 0.75rem;
            border: 0;
            border-radius: 4px;
            background-color: ${props => props.theme['base-200']};

            &::placeholder {
                color: ${props => props.theme['base-400']};
                flex-grow: 1;
            }

            &#cep {
                grid-area: cep;
            }
            &#rua {
                grid-area: rua;
            }
            &#numero {
                grid-area: numero;
            }
            &#complemento {
                grid-area: complemento;
                position: relative;
                &::placeholder::after {
                    content: "Opcionaasfsafasfsafasfsafl";
                    font-size: 2rem;
                }
            }
            &#bairro {
                grid-area: bairro;
            }
            &#cidade {
                grid-area: cidade;
            }
            &#uf {
                grid-area: uf;
                grid-column: 50px;
            }
        }
    }
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
    border-radius: 4px 30px 4px 30px;

    div {
        background-color: ${props => props.theme['base-50']};
    }
`
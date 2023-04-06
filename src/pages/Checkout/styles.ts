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
    svg {
        color: ${props => props.theme['purple']};
    }
    header {
        display: flex;
        gap: 1rem;
        justify-content: flex-start;
        align-items: flex-start;

        
        div {
            display: inline;
            p {
                font-size: 0.875rem;
            }
        }
    }
    .creditcard-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 2rem;
    }
`
interface ButtonProps {
    buttonSelected: boolean;
}

export const Button = styled.button<ButtonProps>`

display: flex;
justify-content: flex-start;
align-items: center;
gap: 0.5rem;
padding: 1rem;
border: 0;
border-radius: 4px;
font-size: 1rem;
color: ${props => props.theme['base-500']};
background-color: ${props => props.buttonSelected ? props.theme['purple-light'] : props.theme['base-200']};
border: ${props => props.buttonSelected ? `1px solid ${props.theme['purple']}` : '0'};
transition: all 0.2s;
&:hover {
    filter: brightness(0.8);
}
`

export const CartContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    margin-top: 1rem;
    border-radius: 4px 30px 4px 30px;

    .checkoutContainer {
        background-color: ${props => props.theme['base-50']};
        padding: 2.5rem;
        border-radius: 4px 30px 4px 30px;
        form {
            display: flex;
            flex-direction: column;
            article {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                padding-bottom: 2rem;
                gap: 1rem;
                margin: 1rem 0;
                border-bottom: 1px solid ${props => props.theme['base-200']};
                
                img {
                   width: 64px; 
                   height: 64px;
                }
                div {
                    .item-buttons {
                        display: flex;
                        gap: 0.5rem;
                        margin-top: 1rem;
                        button {
                            background-color: ${props => props.theme['base-200']};
                            border: 0;
                            border-radius: 4px;
                            padding: 0.5rem;
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;

                            &:last-child:hover {
                                filter: brightness(0.8);
                            }
                            svg {
                                color: ${props => props.theme['purple']};
                                &:hover {
                                    color: ${props => props.theme['purple-dark']};
                                }
                            }
                        }
                    }
                }
            }
            button[type="submit"] {
                padding: 1rem;
                margin-top: 1rem;
                border: 0;
                border-radius: 8px;
                background-color: ${props => props.theme['yellow']};
                color: white;
                font-size: 500;
            }
        }
    }
`
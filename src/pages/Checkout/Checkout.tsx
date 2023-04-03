import { AdressContainer, AdressSelection, CartContainer, CheckoutMain, CreditCardSelection } from "./styles";
import { MapPinLine } from 'phosphor-react';

export function Checkout() {
    return (
        <CheckoutMain>
            <AdressContainer>
                <h1> Complete seu pedido </h1>
                <AdressSelection>
                    <header>
                        <MapPinLine />
                        <span> Endereço de Entrega </span>
                        <p> Informe o endereço onde deseja receber seu pedido </p>
                    </header>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="number"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </AdressSelection>
                <CreditCardSelection>
                    <header>
                        <MapPinLine />
                        <span> Pagamento </span>
                        <p> O pagamento é feito na entrega. Escolha a forma que deseja pagar </p>
                    </header>
                    <button type="button"> Cartão de crédito </button>
                    <button type="button"> Cartão de Débito </button>
                    <button type="button"> Dinheiro </button>
                </CreditCardSelection>
            </AdressContainer>
            <CartContainer>
                <h1> Cafés Selecionados </h1>
                <div>
                    <article>

                    </article>
                    <span></span>
                    <span></span>
                    <strong></strong>
                    <button type="submit"></button>
                </div>
            </CartContainer>
        </CheckoutMain>
    );
}
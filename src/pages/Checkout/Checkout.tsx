import { AdressContainer, AdressSelection, CartContainer, CheckoutMain, CreditCardSelection } from "./styles";
import { MapPinLine } from 'phosphor-react';

export function Checkout() {
    return (
        <CheckoutMain>
            <AdressContainer>
                <h1> Complete seu pedido </h1>
                <AdressSelection>
                    <header>
                        <MapPinLine size={24}/>
                        <div>
                            <span> Endereço de Entrega </span>
                            <p> Informe o endereço onde deseja receber seu pedido </p>
                        </div>
                    </header>
                    <div>
                        <input type="text" name="cep" id="cep" placeholder="CEP"/>
                        <input type="text" name="rua" id="rua" placeholder="RUA"/>
                        <input type="number" name="numero" id="numero" placeholder="NUMERO"/>
                        <input type="text" name="complemento" id="complemento" placeholder="COMPLEMENTO"/>
                        <input type="text" name="bairro" id="bairro" placeholder="BAIRRO"/>
                        <input type="text" name="cidade" id="cidade" placeholder="CIDADE"/>
                        <input type="text" name="uf" id="uf" placeholder="UF"/>
                    </div>
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
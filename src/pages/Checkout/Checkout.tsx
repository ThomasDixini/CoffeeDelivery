import { AdressContainer, CartContainer, CheckoutMain } from "./styles";

export function Checkout() {
    return (
        <CheckoutMain>
            <AdressContainer>
                <h1> Complete seu pedido </h1>
                <div>
                    <header>

                    </header>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="number"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div>
                    <header>

                    </header>
                    <button type="button"> a </button>
                    <button type="button"> a </button>
                    <button type="button"> a </button>
                </div>
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
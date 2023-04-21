import {
  AdressContainer,
  AdressSelection,
  Button,
  CartContainer,
  CheckoutMain,
  CreditCardSelection,
  SpanCheckout,
  StrongTotal,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { IncreaseButton } from '../../components/IncreaseButton/IncreaseButton'

export function Checkout() {
  const [cardButtonType, setCardButtonType] = useState('')
  const {
    totalItensSelectedForBuy,
    handleIncrementItem,
    handleDecrementItem,
    handleDeleteitem,
  } = useContext(CoffeesContext)

  function handleSelectButton(type: string) {
    if (cardButtonType === type) {
      return setCardButtonType('')
    }
    setCardButtonType(type)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(totalItensSelectedForBuy)

    localStorage.setItem('@coffee-delivery:totalItens-1.0.0', stateJSON)
  }, [totalItensSelectedForBuy])

  const itensQuantityPrice = totalItensSelectedForBuy.reduce((acc, item) => {
    acc += item.quantity * item.price
    return acc
  }, 0)

  return (
    <CheckoutMain>
      <AdressContainer>
        <h1> Complete seu pedido </h1>
        <AdressSelection>
          <header>
            <MapPinLine size={24} />
            <div>
              <span> Endereço de Entrega </span>
              <p> Informe o endereço onde deseja receber seu pedido </p>
            </div>
          </header>
          <div>
            <input type="text" name="cep" id="cep" placeholder="CEP" />
            <input type="text" name="rua" id="rua" placeholder="RUA" />
            <input
              type="number"
              name="numero"
              id="numero"
              placeholder="NUMERO"
            />
            <input
              type="text"
              name="complemento"
              id="complemento"
              placeholder="COMPLEMENTO"
            />
            <input type="text" name="bairro" id="bairro" placeholder="BAIRRO" />
            <input type="text" name="cidade" id="cidade" placeholder="CIDADE" />
            <input type="text" name="uf" id="uf" placeholder="UF" />
          </div>
        </AdressSelection>
        <CreditCardSelection>
          <header>
            <CurrencyDollar size={24} />
            <div>
              <span> Pagamento </span>
              <p>
                {' '}
                O pagamento é feito na entrega. Escolha a forma que deseja pagar{' '}
              </p>
            </div>
          </header>
          <div className="creditcard-buttons">
            <Button
              type="button"
              buttonSelected={cardButtonType === 'creditCard'}
              onClick={() => handleSelectButton('creditCard')}
            >
              {' '}
              <CreditCard /> Cartão de crédito{' '}
            </Button>
            <Button
              type="button"
              buttonSelected={cardButtonType === 'debitCard'}
              onClick={() => handleSelectButton('debitCard')}
            >
              {' '}
              <Bank /> Cartão de Débito{' '}
            </Button>
            <Button
              type="button"
              buttonSelected={cardButtonType === 'money'}
              onClick={() => handleSelectButton('money')}
            >
              {' '}
              <Money /> Dinheiro{' '}
            </Button>
          </div>
        </CreditCardSelection>
      </AdressContainer>
      <CartContainer>
        <h1> Cafés Selecionados </h1>
        <div className="checkoutContainer">
          <form action="">
            {totalItensSelectedForBuy.map((item) => {
              return (
                <>
                  <article key={item.id}>
                    <img src={item.img_item} alt="" />
                    <div>
                      <p> {item.title} </p>
                      <div className="item-buttons">
                        <IncreaseButton
                          id={item.id}
                          quantity={item.quantity}
                          handleIncrementItem={handleIncrementItem}
                          handleDecrementItem={handleDecrementItem}
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteitem(item.id)}
                        >
                          {' '}
                          <Trash size={16} /> REMOVER{' '}
                        </button>
                      </div>
                    </div>
                    <strong> {item.price} </strong>
                  </article>
                </>
              )
            })}
            <SpanCheckout totalItens={itensQuantityPrice}>
              {' '}
              Total de itens{' '}
            </SpanCheckout>
            <SpanCheckout totalItens={3.5}> Entrega </SpanCheckout>
            <StrongTotal totalItens={itensQuantityPrice + 3.5}>
              {' '}
              Total{' '}
            </StrongTotal>
            <button type="submit"> CONFIRMAR PEDIDO </button>
          </form>
        </div>
      </CartContainer>
    </CheckoutMain>
  )
}

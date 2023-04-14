import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  CoffeeItem,
  CoffeeListSection,
  MainContainer,
  SloganSection,
  Subtitle,
} from './style'

import copo from '../../assets/copo.svg'

import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { IncreaseButton } from '../../components/IncreaseButton/IncreaseButton'

export function Home() {
  const { coffeeList, handleIncrementItem, handleDecrementItem } =
    useContext(CoffeesContext)

  return (
    <MainContainer>
      <SloganSection>
        <div>
          <h2> Encontre o café perfeito para qualquer hora do dia </h2>
          <p>
            {' '}
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora{' '}
          </p>
          <div>
            <span>
              {' '}
              <ShoppingCart
                weight="fill"
                size={35}
                className="shopping-cart"
              />{' '}
              Compra simples e segura{' '}
            </span>
            <span>
              {' '}
              <Timer weight="fill" size={35} className="timer" /> Entrega rápida
              e rastreada{' '}
            </span>
            <span>
              {' '}
              <Package weight="fill" size={35} className="package" /> Embalagem
              mantém o café intacto{' '}
            </span>
            <span>
              {' '}
              <Coffee weight="fill" size={35} className="coffee" /> O café chega
              fresquinho até você{' '}
            </span>
          </div>
        </div>
        <img src={copo} alt="Imagem de um copo de café" />
      </SloganSection>
      <CoffeeListSection>
        <h1> Nossos cafés </h1>
        <form action="">
          {coffeeList.map((coffee) => {
            return (
              <CoffeeItem key={coffee.id}>
                <img src={coffee.img_item} alt="Imagem de café" />
                <strong> {coffee.title} </strong>
                <Subtitle>
                  {coffee.type.map((item) => {
                    return <b key={Math.random()}> {item} </b>
                  })}
                </Subtitle>

                <p> {coffee.description} </p>
                <div>
                  <span> {coffee.price} </span>
                  <IncreaseButton
                    id={coffee.id}
                    quantity={coffee.quantity}
                    handleIncrementItem={handleIncrementItem}
                    handleDecrementItem={handleDecrementItem}
                  />
                  <button type="submit">
                    <ShoppingCart weight="fill" size={24} />{' '}
                  </button>
                </div>
              </CoffeeItem>
            )
          })}
        </form>
      </CoffeeListSection>
    </MainContainer>
  )
}

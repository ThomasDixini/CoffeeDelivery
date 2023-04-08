import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

import {
  CoffeeItem,
  CoffeeListSection,
  MainContainer,
  SloganSection,
  Subtitle,
} from './style'

import copo from '../../assets/copo.svg'

import { useContext, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'



export function Home() {
  
  const [totalItensSelectedForBuy, setTotalItensSelectedForBuy] = useState([])
  const [quantityItem, setQuantityItem] = useState(0)
  const { coffeeList } = useContext(CoffeesContext)

  function handleIncrementItem(id: number) {
    coffeeList.map(coffee => {
      if(coffee.id === id) {
        setQuantityItem(coffee.quantity += 1)
        return {...coffee, quantity: quantityItem}
      } else {
        return coffee
      }
    })  
  }
  function handleDecrementItem(id: number) {
    coffeeList.map(coffee => {
      if(coffee.id === id) {
        if(quantityItem > 0) {
          setQuantityItem(coffee.quantity -= 1)
        }
        return {...coffee, quantity: quantityItem}
      } else {
        return coffee
      }
    })  
  }

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
                  <button type="button">
                    {' '}
                    <Minus onClick={() => handleDecrementItem(coffee.id)}/> {coffee.quantity} <Plus onClick={() => handleIncrementItem(coffee.id)} />{' '}
                  </button>
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

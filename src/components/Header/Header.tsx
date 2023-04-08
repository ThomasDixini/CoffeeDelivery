import { MapPinLine, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer } from './style'
import { useContext, useState } from 'react'
import { CoffeeType, CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {

  const { totalItensSelectedForBuy } = useContext(CoffeesContext);

  const sumOfTotalItensInCart = totalItensSelectedForBuy.reduce(( finalValue, currentElement ) => {
    return finalValue += currentElement.quantity
  }, 0)
  
  return (
    <HeaderContainer sumOfTotalItensInCart={sumOfTotalItensInCart}>
      <Link to="/">
        <img src={coffeeLogo} alt="Logo do site" />
      </Link>
      <nav>
        <span>
          {' '}
          <MapPinLine size={24} weight="fill" /> Porto Alegre, RS{' '}
        </span>
        <Link to="/checkout">
          {' '}
          <ShoppingCartSimple size={24} weight="fill" />
        </Link>
      </nav>
    </HeaderContainer>
  )
}

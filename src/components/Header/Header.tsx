import { MapPinLine, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer } from './style'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { sumState } = useContext(CoffeesContext)

  return (
    <HeaderContainer sumOfTotalItensInCart={sumState}>
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

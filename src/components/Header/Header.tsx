import { MapPinLine, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
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

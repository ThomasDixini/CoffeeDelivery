import { MapPinLine, ShoppingCartSimple } from 'phosphor-react';
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer } from './style';

export function Header() {
    return (
        <HeaderContainer> 
            <img src={coffeeLogo} alt="Logo do site" />
            <nav>
                <span> <MapPinLine size={24} weight="fill" /> Porto Alegre, RS </span>
                <a href="#"> <ShoppingCartSimple size={24} weight="fill" /></a>
            </nav>
        </HeaderContainer>
    );
}
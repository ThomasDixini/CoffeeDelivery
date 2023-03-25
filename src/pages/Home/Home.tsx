import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import copo from '../../assets/copo.svg'
import { MainContainer, SloganSection } from './style';

export function Home() {
    return (
        <MainContainer>
            <SloganSection>
                <div>
                    <h2> Encontre o café perfeito para qualquer hora do dia </h2>
                    <p> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora </p>
                    <div>
                        <span> <ShoppingCart weight='fill' size={35} className="shopping-cart"/> Compra simples e segura </span>
                        <span> <Timer weight='fill' size={35} className="timer"/> Entrega rápida e rastreada </span>
                        <span> <Package weight='fill' size={35} className="package"/> Embalagem mantém o café intacto </span>
                        <span> <Coffee weight='fill' size={35} className="coffee"/> O café chega fresquinho até você </span>
                    </div>
                </div>
                <img src={copo} alt="Imagem de um copo de café" />
            </SloganSection>
        </MainContainer>
    );
}
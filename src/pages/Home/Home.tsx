import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import copo from '../../assets/copo.svg'
import { CoffeeItem, CoffeeListSection, MainContainer, SloganSection } from './style';

export function Home() {

    const coffeeArray = [
        {
            id: new Date().getTime(),
            img_item: '',
            type: ['tradicional', 'com leite'],
            title: 'Café normal',
            description: 'Café desnatado sem açúcar',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: '',
            type: ['tradicional', 'com leite'],
            title: 'Café normal',
            description: 'Café desnatado sem açúcar',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: '',
            type: ['tradicional', 'com leite'],
            title: 'Café normal',
            description: 'Café desnatado sem açúcar',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: '',
            type: ['tradicional', 'com leite'],
            title: 'Café normal',
            description: 'Café desnatado sem açúcar',
            price: 9.99,
        },
    ]

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
            <CoffeeListSection>
                {
                    coffeeArray.map(coffee => {
                        return(
                            <CoffeeItem key={coffee.id}>
                                <img src={coffee.img_item} alt="Imagem de café" />
                                <strong> {coffee.title} </strong>
                                <p> {coffee.description} </p>
                                <div>
                                    <span> {coffee.price} </span>
                                    <button type="button"> 1 </button>
                                    <button type="submit"><ShoppingCart weight='fill'/> </button>
                                </div>
                            </CoffeeItem>
                        );
                    })
                }
            </CoffeeListSection>
        </MainContainer>
    );
}
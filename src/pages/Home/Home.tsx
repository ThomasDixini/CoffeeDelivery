import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from 'phosphor-react';

import { CoffeeItem, CoffeeListSection, MainContainer, SloganSection, Subtitle } from './style';

import copo from '../../assets/copo.svg'
import expresso from '../../assets/expresso.svg'
import Americano from '../../assets/Americano.svg'
import Cremoso from '../../assets/Cremoso.svg'
import Gelado from '../../assets/Gelado.svg'
import CaféComLeite from '../../assets/CaféComLeite.svg'
import Latte from '../../assets/Latte.svg'
import Capuccino from '../../assets/Capuccino.svg'
import Macchiato from '../../assets/Macchiato.svg'
import Mocaccino from '../../assets/Mocaccino.svg'
import ChocolateQuente from '../../assets/ChocolateQuente.svg'
import Cubano from '../../assets/Cubano.svg'
import Havaiano from '../../assets/Havaiano.svg'
import Árabe from '../../assets/Árabe.svg'
import Irlandês from '../../assets/Irlandês.svg'


interface Coffee {
    id: number;
    img_item: string;
    type: string[];
    title: string;
    description: string;
    price: number;
}

export function Home() {

    const coffeeArray: Coffee[] = [
        {
            id: new Date().getTime(),
            img_item: expresso,
            type: ['TRADICIONAL'],
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Americano,
            type: ['TRADICIONAL'],
            title: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Cremoso,
            type: ['TRADICIONAL'],
            title: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Gelado,
            type: ['TRADICIONAL', 'GELADO'],
            title: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: CaféComLeite,
            type: ['TRADICIONAL', 'COM LEITE'],
            title: 'Café com leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Latte,
            type: ['TRADICIONAL', 'COM LEITE'],
            title: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Capuccino,
            type: ['TRADICIONAL', 'COM LEITE'],
            title: 'Capuccino',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Macchiato,
            type: ['TRADICIONAL', 'COM LEITE'],
            title: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Mocaccino,
            type: ['TRADICIONAL', 'COM LEITE'],
            title: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: ChocolateQuente,
            type: ['ESPECIAL', 'COM LEITE'],
            title: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Cubano,
            type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
            title: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Havaiano,
            type: ['ESPECIAL'],
            title: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Árabe,
            type: ['ESPECIAL'],
            title: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            price: 9.99,
        },
        {
            id: new Date().getTime(),
            img_item: Irlandês,
            type: ['ESPECIAL', 'ALCOÓLICO'],
            title: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
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
                <h1> Nossos cafés </h1>
                <form action="">
                    {
                        coffeeArray.map(coffee => {
                            return(
                                <CoffeeItem key={coffee.id}>
                                    <img src={coffee.img_item} alt="Imagem de café" />
                                    <strong> {coffee.title} </strong>
                                    <Subtitle>
                                        {
                                            coffee.type.map(item => {
                                                return <b> {item} </b>
                                            })
                                        }           
                                    </Subtitle> 
                                    
                                    <p> {coffee.description} </p>
                                    <div>
                                        <span> {coffee.price} </span>
                                        <button type="button"> <Minus /> 1 <Plus /> </button>
                                        <button type="submit"><ShoppingCart weight='fill' size={24}/> </button>
                                    </div>
                                </CoffeeItem>
                            );
                        })
                    }
                </form>
            </CoffeeListSection>
        </MainContainer>
    );
}
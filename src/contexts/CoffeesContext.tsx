import { ReactNode, createContext, useState } from 'react'
import expresso from '../assets/expresso.svg'
import Americano from '../assets/Americano.svg'
import Cremoso from '../assets/Cremoso.svg'
import Gelado from '../assets/Gelado.svg'
import CaféComLeite from '../assets/CaféComLeite.svg'
import Latte from '../assets/Latte.svg'
import Capuccino from '../assets/Capuccino.svg'
import Macchiato from '../assets/Macchiato.svg'
import Mocaccino from '../assets/Mocaccino.svg'
import ChocolateQuente from '../assets/ChocolateQuente.svg'
import Cubano from '../assets/Cubano.svg'
import Havaiano from '../assets/Havaiano.svg'
import Árabe from '../assets/Árabe.svg'
import Irlandês from '../assets/Irlandês.svg'

export interface CoffeeType {
  id: number
  img_item: string
  type: string[]
  title: string
  description: string
  quantity: number
  price: number
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextData {
  coffeeList: CoffeeType[]
  totalItensSelectedForBuy: CoffeeType[]
  sumState: number
  addItemOnCart: (item: CoffeeType) => void
  removeItemOnCart: (item: CoffeeType) => void
  handleDeleteitem: (id: number) => void
  handleIncrementItem: (id: number) => void
  handleDecrementItem: (id: number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextData)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeeList] = useState<CoffeeType[]>([
    {
      id: 1,
      img_item: expresso,
      type: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 2,
      img_item: Americano,
      type: ['TRADICIONAL'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 3,
      img_item: Cremoso,
      type: ['TRADICIONAL'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 4,
      img_item: Gelado,
      type: ['TRADICIONAL', 'GELADO'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 5,
      img_item: CaféComLeite,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Café com leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 6,
      img_item: Latte,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 7,
      img_item: Capuccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 8,
      img_item: Macchiato,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 9,
      img_item: Mocaccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 10,
      img_item: ChocolateQuente,
      type: ['ESPECIAL', 'COM LEITE'],
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 11,
      img_item: Cubano,
      type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 12,
      img_item: Havaiano,
      type: ['ESPECIAL'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 13,
      img_item: Árabe,
      type: ['ESPECIAL'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      quantity: 0,
      price: 9.99,
    },
    {
      id: 14,
      img_item: Irlandês,
      type: ['ESPECIAL', 'ALCOÓLICO'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      quantity: 0,
      price: 9.99,
    },
  ])
  const [totalItensSelectedForBuy, setTotalItensSelectedForBuy] = useState<
    CoffeeType[]
  >([])
  const [quantityItem, setQuantityItem] = useState(0)
  const [sumState, setSumState] = useState(0)

  function sumOfItemsOnCart() {
    const sumOfTotalItensInCart = totalItensSelectedForBuy.reduce(
      (finalValue, currentElement) => {
        return (finalValue += currentElement.quantity)
      },
      0,
    )
    setSumState((state) => (state = sumOfTotalItensInCart))
  }

  function addItemOnCart(item: CoffeeType) {
    const itemAlreadyExists = totalItensSelectedForBuy.find(
      (itemSelected) => itemSelected.id === item.id,
    )
    if (itemAlreadyExists) {
      return sumOfItemsOnCart()
    } else {
      setTotalItensSelectedForBuy((state) => [...state, item])
      setSumState((state) => (state += 1))
    }
  }

  function removeItemOnCart(item: CoffeeType) {
    if (item.quantity === 0) {
      const itemRemoved = totalItensSelectedForBuy.filter(
        (itemSelected) => itemSelected.id !== item.id,
      )
      setTotalItensSelectedForBuy(itemRemoved)
      setSumState((state) => (state -= 1))
    } else {
      setSumState((state) => (state -= 1))
    }
  }
  function handleDeleteitem(id: number) {
    const itemFiltred = totalItensSelectedForBuy.filter(
      (itemSelected) => itemSelected.id !== id,
    )
    setTotalItensSelectedForBuy(itemFiltred)
    setSumState(0)
    coffeeList.map((coffee) => {
      if (coffee.id === id) {
        return (coffee.quantity = 0)
      }
    })
  }
  function handleIncrementItem(id: number) {
    coffeeList.map((coffee) => {
      if (coffee.id === id) {
        setQuantityItem((coffee.quantity += 1))
        addItemOnCart(coffee)
        return { ...coffee, quantity: quantityItem }
      } else {
        return coffee
      }
    })
  }
  function handleDecrementItem(id: number) {
    coffeeList.map((coffee) => {
      if (coffee.id === id) {
        if (quantityItem > 0) {
          setQuantityItem((coffee.quantity -= 1))
          removeItemOnCart(coffee)
        }
        return { ...coffee, quantity: quantityItem }
      } else {
        return coffee
      }
    })
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeeList,
        totalItensSelectedForBuy,
        sumState,
        addItemOnCart,
        removeItemOnCart,
        handleIncrementItem,
        handleDecrementItem,
        handleDeleteitem,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

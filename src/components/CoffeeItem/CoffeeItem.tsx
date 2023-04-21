import { ShoppingCart } from 'phosphor-react'
import { CoffeeType } from '../../contexts/CoffeesContext'
import { IncreaseButton } from '../IncreaseButton/IncreaseButton'
import { ArticleContainer, Subtitle } from './styles'

interface CoffeeItemProps extends CoffeeType {
  incrementItem: (id: number) => void
  decrementItem: (id: number) => void
}

export function CoffeeItem({
  id,
  img_item,
  title,
  type,
  description,
  price,
  quantity,
  incrementItem,
  decrementItem,
}: CoffeeItemProps) {
  return (
    <ArticleContainer>
      <img src={img_item} alt="Imagem de café" />
      <strong> {title} </strong>
      <Subtitle>
        {type.map((item) => {
          return <b key={Math.random()}> {item} </b>
        })}
      </Subtitle>

      <p> {description} </p>
      <div>
        <span> {price} </span>
        <IncreaseButton
          id={id}
          quantity={quantity}
          handleIncrementItem={incrementItem}
          handleDecrementItem={decrementItem}
        />
        <button type="submit">
          <ShoppingCart weight="fill" size={24} />{' '}
        </button>
      </div>
    </ArticleContainer>
  )
}

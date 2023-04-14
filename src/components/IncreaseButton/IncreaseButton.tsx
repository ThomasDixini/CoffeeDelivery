import { Minus, Plus } from 'phosphor-react'
import { Button } from './styles'

interface IncreaseButtonProps {
  id: number
  quantity: number
  handleIncrementItem: (id: number) => void
  handleDecrementItem: (id: number) => void
}

export function IncreaseButton({
  id,
  quantity,
  handleIncrementItem,
  handleDecrementItem,
}: IncreaseButtonProps) {
  return (
    <>
      <Button type="button">
        {' '}
        <Minus onClick={() => handleDecrementItem(id)} /> {quantity}{' '}
        <Plus onClick={() => handleIncrementItem(id)} />{' '}
      </Button>
    </>
  )
}

import { Container, List } from '@mui/material'
import { Total } from './Total'
import { OptionListCard } from './OptionListCard'
import { useAppSelector } from './redux/hooks'
import { InitialDataProp } from './initialData'

// eslint-disable-next-line react/display-name
export function Cart() {
  const store = useAppSelector((state) => state.products)
  const cartCount = store.filter((products) => products.count > 0)

  if (!cartCount || !Array.isArray(cartCount)) return 'Something twrong!'
  if (cartCount.length === 0) return ' Ваш список покупок пока пуст!'
  return (
    <Container
      maxWidth="sm"
      style={{ border: '2px solid grey', marginTop: '10px' }}
    >
      {cartCount.length > 0 && (
        <List>
          {cartCount.map((item) => (
            <li key={item.id}>
              <OptionListCard item={item} />
            </li>
          ))}
        </List>
      )}
      <hr />
      <Total />
    </Container>
  )
}

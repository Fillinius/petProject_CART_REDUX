import { memo } from 'react'
import { useAppSelector } from './redux/hooks'
import BasicModal from './modal/basicModal'

// eslint-disable-next-line react/display-name
export const Total = memo(() => {
  const store = useAppSelector((state) => state.products)
  const cartCount = store.filter((products) => products.count > 0)
  if (!cartCount || !Array.isArray(cartCount)) return 'Someting trwong'

  const total = cartCount.reduce(
    (acc, item) => acc + item.count * item.price,

    0
  )
  if (!total) return 'error'
  return (
    <>
      <h3>Полная стоимость покупки - {total} $</h3>
      <BasicModal />
    </>
  )
})

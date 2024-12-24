import { memo, useContext } from "react";
import { DataContext } from "./context/context";

// eslint-disable-next-line react/display-name
export const Total = memo(() => {
  const { cartCount } = useContext(DataContext)
  if (!cartCount || !Array.isArray(cartCount)) return 'Someting trwong'

  const total = cartCount.reduce((acc, item) =>

    (acc + (item.count * item.price))

    , 0)
  if (!total) return "error"
  return (
    <>
      <h3>Полная стоимость покупки - {total} $</h3>
    </>
  )
})
import { createContext } from 'react'
import { useCallback, useState } from 'react'
import { initialData } from '../initialData'

export const DataContext = createContext({
  count: 0,
  favorite: false,
  products: [],
  cartCount: [],
  handleClickFavorite: () => { },
  handleClickCart: () => { },
  handleClickCartMinus: () => { },
})

export const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState(initialData)

  const cartCount = products.filter((products) => products.count > 0)

  const handleClickFavorite = useCallback(
    (id) => {
      setProducts(
        products.map((product) => {
          if (product.id === id)
            return {
              ...product,
              favorite: !product.favorite,
            }
          else {
            return product
          }
        })
      )
    },
    [products]
  )

  const handleClickCart = useCallback(
    (id) => {
      setProducts(
        products.map((product) => {
          if (product.id === id)
            return {
              ...product,
              count: (product.count += 1),
            }
          return product
        })
      )
    },
    [products]
  )

  const handleClickCartMinus = useCallback(
    (id) => {
      setProducts(
        products.map((product) => {
          if (product.id === id)
            return {
              ...product,
              count: (product.count -= 1),
            }
          return product
        })
      )
    },
    [products]
  )
  return (
    <DataContext.Provider
      value={{
        handleClickFavorite,
        handleClickCart,
        handleClickCartMinus,
        products,
        cartCount
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

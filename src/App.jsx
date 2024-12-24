import { useCallback, useState } from "react"
import { initialData } from "./InitialData"
import { NavBar } from './assets/NavBar'
import { StoreCard } from './StoreCard'
import './App.css'
import { Cart } from "./Cart"

function App() {
  const [products, setProducts] = useState(initialData)

  const cartCount = products.filter(products => products.count > 0)

  const handleClickFavorite = useCallback((id) => {
    setProducts(products.map(product => {
      if (product.id === id)
        return {
          ...product,
          favorite: !product.favorite
        }
      else { return product }
    }))
  }, [products])

  const handleClickCart = useCallback((id) => {
    setProducts(
      products.map(product => {
        if (product.id === id) return {
          ...product,
          count: product.count += 1
        }
        return product
      })

    )
  }, [products])

  const handleClickCartMinus = useCallback((id) => {
    setProducts(
      products.map(product => {
        if (product.id === id) return {
          ...product,
          count: product.count -= 1
        }
        return product
      })

    )
  }, [products])

  return (
    <>
      <div className="container">
        <NavBar cartCount={cartCount} />
        <StoreCard products={products} onClickFavorite={handleClickFavorite} onClickCart={handleClickCart} />
        <Cart cartCount={cartCount} onClickPlus={handleClickCart} onClickMinus={handleClickCartMinus} />
      </div>
    </>
  )
}

export default App

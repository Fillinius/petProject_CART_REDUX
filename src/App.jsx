import { useCallback, useState } from "react"
import { initialData } from "./InitialData"
import { NavBar } from './assets/NavBar'
import { StoreCard } from './StoreCard'
import './App.css'

function App() {
  const [products, setProducts] = useState(initialData)
  console.log(products);

  const cardCount = products.filter(products => products.count > 0)

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
        if (product.id === id) product.count += 1
        return product
      })

    )
  }, [products])

  return (
    <>
      <div className="container">
        <NavBar cardCount={cardCount} />
        <StoreCard products={products} onClickFavorite={handleClickFavorite} onClickCart={handleClickCart} />
      </div>
    </>
  )
}

export default App

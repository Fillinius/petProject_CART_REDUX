import { useState } from "react"
import { initialData } from "./InitialData"
import { NavBar } from './assets/NavBar'
import { StoreCard } from './StoreCard'
import './App.css'

function App() {
  const [products, setProducts] = useState(initialData)
  const cardCount = products.filter(products => products.count > 0)

  const handleClickFavorite = (id) => {
    setProducts(products.map(product => {
      if (product.id === id)
        return {
          ...product,
          favorite: !product.favorite
        }
      else { return product }
    }))
  }

  return (
    <>
      <div className="container">
        <NavBar cardCount={cardCount} />
        <StoreCard products={products} onClickFavorite={handleClickFavorite} />
      </div>
    </>
  )
}

export default App

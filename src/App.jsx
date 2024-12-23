import { useState } from "react"
import { initialData } from "./InitialData"
import { NavBar } from './assets/NavBar'
import { StoreCard } from './StoreCard'
import './App.css'

function App() {
  const [products] = useState(initialData)
  const cardCount = products.filter(products => products.count > 0)

  return (
    <>
      <div className="container">
        <NavBar cardCount={cardCount} />
        <StoreCard products={products} />
      </div>
    </>
  )
}

export default App

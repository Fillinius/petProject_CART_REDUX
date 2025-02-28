import { NavBar } from './NavBar'
import { StoreCard } from './StoreCard'
import './App.css'
import { Cart } from "./Cart"
import { DataContextProvider } from './context/context'

function App() {

  return (
    <>
      <div className="container">
        <DataContextProvider>
          <NavBar />
          <StoreCard />
          <Cart />
        </DataContextProvider>
      </div>
    </>
  )
}

export default App

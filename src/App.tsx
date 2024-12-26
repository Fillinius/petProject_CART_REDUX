import { NavBar } from './NavBar'
import { StoreCard } from './StoreCard'
import './App.css'
import { Cart } from './Cart'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <>
      <div className="container">
        <Provider store={store}>
          <NavBar />
          <StoreCard />
          <Cart />
        </Provider>
      </div>
    </>
  )
}

export default App

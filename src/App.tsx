import { NavBar } from './NavBar'
import { StoreCard } from './StoreCard'
import './App.css'
import { Cart } from './Cart'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <div className="container">
          <Provider store={store}>
            <NavBar />
            <StoreCard />
            <Cart />
          </Provider>
        </div>
      </PersistGate>
    </>
  )
}

export default App

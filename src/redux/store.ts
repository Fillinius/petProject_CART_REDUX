import { applyMiddleware, combineReducers, createStore } from 'redux'
import { productsReducer } from './productsReducer'
import { modalReducer } from './modalReducer'
import thunkMiddleware from 'redux-thunk'
import { logActionMiddleware } from './logActionMiddleware'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = persistReducer(
  { key: 'root', storage },
  combineReducers({
    products: productsReducer,
    modal: modalReducer,
  })
)

export const store = createStore(
  rootReducer,
  applyMiddleware(logActionMiddleware)
)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { productsReducer } from './productsReducer'
import { modalReducer } from './modalReducer'
import thunkMiddleware from 'redux-thunk'
import { logActionMiddleware } from './logActionMiddleware'

const rootReducer = combineReducers({
  products: productsReducer,
  modal: modalReducer,
})

export const store = createStore(
  rootReducer,
  applyMiddleware(logActionMiddleware)
)

export type RootState = ReturnType<typeof rootReducer>

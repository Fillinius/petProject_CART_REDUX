import { initialData } from '../initialData'
import { ProjectAction } from './action'

export function productsReducer(state = initialData, action: ProjectAction) {
  switch (action.type) {
    case 'FAVORITEPRODUCT':
      return state.map((product) => {
        if (product.id === action.payload.id)
          return {
            ...product,
            favorite: !product.favorite,
          }
        else {
          return product
        }
      })
    case 'INCREMENTPRODUCT':
      return state.map((product) => {
        if (product.id === action.payload.id)
          return {
            ...product,
            count: (product.count += 1),
          }
        return product
      })
    case 'DECREMENTPRODUCT':
      return state.map((product) => {
        if (product.id === action.payload.id)
          return {
            ...product,
            count: (product.count -= 1),
          }
        return product
      })

    default:
      return state
  }
}

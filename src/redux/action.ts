import { InitialDataProp } from '../initialData'

interface FavoriteCreateAction {
  type: string
  payload: { id: InitialDataProp['id'] }
}
interface DecrementCreateAction {
  type: string
  payload: { id: InitialDataProp['id'] }
}
interface IncrementCreateAction {
  type: string
  payload: { id: InitialDataProp['id'] }
}

export function favoriteCreater(id: string) {
  return {
    type: 'FAVORITEPRODUCT',
    payload: { id },
  }
}
export function decrementCountCreater(id: string) {
  return {
    type: 'DECREMENTPRODUCT',
    payload: { id },
  }
}
export function incrementCountCreater(id: string) {
  return {
    type: 'INCREMENTPRODUCT',
    payload: { id },
  }
}

export type ProjectAction =
  | FavoriteCreateAction
  | DecrementCreateAction
  | IncrementCreateAction

import { ThunkAction } from 'redux-thunk'
import { InitialDataProp } from '../initialData'
import { RootState } from './store'

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

interface CreateModalAction {
  type: string
}
interface CreateModalActionSuccess {
  type: string
}
interface ResetModalAction {
  type: string
}

export function createrModalAction(): CreateModalAction {
  return {
    type: 'MODAL',
  }
}
export function createrModalActionSuccess(): CreateModalActionSuccess {
  return {
    type: 'MODALSUCCESS',
  }
}
export function resetModalAction(): ResetModalAction {
  return {
    type: 'MODALRESET',
  }
}

export function favoriteCreater(id: string): FavoriteCreateAction {
  return {
    type: 'FAVORITEPRODUCT',
    payload: { id },
  }
}
export function decrementCountCreater(id: string): DecrementCreateAction {
  return {
    type: 'DECREMENTPRODUCT',
    payload: { id },
  }
}
export function incrementCountCreater(id: string): IncrementCreateAction {
  return {
    type: 'INCREMENTPRODUCT',
    payload: { id },
  }
}

export function createModalAction(): ThunkAction<
  void,
  RootState,
  void,
  ProjectAction
> {
  return async (dispatch) => {
    dispatch(createrModalAction())

    const response = await fetch(
      'https://mocki.io/v1/171647fe-1cd6-43fd-9001-69f67a99dbe7'
    )
    const data = await response.json()
    console.log(data, 'data')

    if (data.success) {
      dispatch(createrModalActionSuccess())
    } else {
      dispatch(resetModalAction())
    }
  }
}

export type ProjectAction =
  | FavoriteCreateAction
  | DecrementCreateAction
  | IncrementCreateAction
  | CreateModalAction
  | CreateModalActionSuccess
  | ResetModalAction

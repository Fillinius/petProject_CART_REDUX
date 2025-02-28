import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { ProjectAction } from './action'

import { ThunkDispatch } from 'redux-thunk'
import { RootState } from './store'

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ProjectAction>
>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

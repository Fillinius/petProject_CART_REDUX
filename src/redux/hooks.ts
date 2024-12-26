import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { ProjectAction } from './action'
import { RootStore } from './store'

export const useAppDispatch = useDispatch<Dispatch<ProjectAction>>
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector

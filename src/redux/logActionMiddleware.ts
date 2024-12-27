import { Middleware } from 'redux'
import { logAction } from '../metrics/logAction'
import { ProjectAction } from './action'
import { RootState } from './store'

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: ProjectAction) {
      logAction(action)
      next(action)
    }
  }
}

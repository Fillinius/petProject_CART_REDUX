import { ProjectAction } from './action'

interface ModalProp {
  loading: boolean
  confirmed: boolean
}

const initialModal: ModalProp = {
  loading: false,
  confirmed: false,
}
export function modalReducer(state = initialModal, action: ProjectAction) {
  switch (action.type) {
    case 'MODAL':
      return {
        loading: true,
        confirmed: false,
      }

    case 'MODALSUCCESS':
      return {
        loading: false,
        confirmed: true,
      }
    case 'MODALRESET':
      return {
        loading: false,
        confirmed: false,
      }

    default:
      return state
  }
}

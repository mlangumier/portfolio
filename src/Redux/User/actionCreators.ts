import * as actionTypes from './actionTypes'

export function createUser(user: UserInterface) {
  const action: UserAction = {
    type: actionTypes.CREATE_USER,
    user
  }
  return simulatedHttpRequest(action)
}

export function updateUser(user: UserInterface) {
  const action: UserAction = {
    type: actionTypes.UPDATE_USER,
    user
  }
  return simulatedHttpRequest(action)
}

export function simulatedHttpRequest(action: UserAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 1000)
  }
}
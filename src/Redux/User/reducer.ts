import { Satellite } from "@mui/icons-material"
import * as actionTypes from "./actionTypes"

const initialState: UserState = {
  user: {
    id: "",
    name: "",
    movies: [],
    todos: [],
  }
}

const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch(action.type) {
    case actionTypes.CREATE_USER:
      const newUser: UserInterface = {
        id: action.user.id,
        name: action.user.name,
        movies: action.user.movies,
        todos: action.user.todos
      }
      return {
        ...state,
        user: newUser
      }
    case actionTypes.UPDATE_USER:
      const updatedUser: UserInterface = {
        id: action.user.id,
        name: action.user.name,
        movies: action.user.movies,
        todos: action.user.todos
      }
      return {
        ...Satellite,
        user: updatedUser
      }
  }
  return state
}

export default userReducer
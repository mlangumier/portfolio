import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'Redux/store'
import { database } from 'Services/api.firebase'

export interface UserState {
  id: string,
  name: string,
  isConfirmed: boolean,
  movies: Array<object>,
  todos: Array<object>,
}

export const initialState: UserState = {
  id: '',
  name: '',
  isConfirmed: false,
  movies: [],
  todos: [],
}

export interface UserIdentity {
  id: string,
  name: string,
  isConfirmed: boolean,
}

//REDUCERS (à séparer dans différents fichiers)
// type State = {
//   id: string,
//   name: string,
//   isConfirmed: boolean,
// }
// const createUserSlice: CaseReducer<State, PayloadAction<UserState>> = (state, action) => {
//   state.id = action.payload.id,
//   state.name = action.payload.name,
// }


export const userSlice = createSlice({
  name: 'user', 
  initialState,
  //* Possibility: 
  // reduciers: {
  //   otherReducer,
  // }
  reducers: {
    initUser: (state:any) => {
      state.id = 'Mathieu#8653';
      state.name = 'Mathieu';
      state.isConfirmed = false
    },
    updateUsername: (state:any, { payload }:PayloadAction<UserIdentity>) => {
      // localStorage.addItem("user", payload.id)
      database.put(`user/${payload.id}`, payload)
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        isConfirmed: payload.isConfirmed,
      };
    }

  }
})

export const { initUser, updateUsername } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
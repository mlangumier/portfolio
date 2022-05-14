import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'Redux/store'
import { getDatabase, ref, push, onValue } from 'firebase/database'
import { firebaseApp } from 'Services/firebase'
import { randomNumber } from 'Functions/randomNumber'
const database = getDatabase(firebaseApp)

export interface UserState {
  id: string,
  name: string,
  isConfirmed: boolean,
  movies: Array<object>,
  todos: Array<object>,
}

export const initialState: UserState = {
  id: `Visitor#${randomNumber(1000,9999)}`,
  name: 'Visitor',
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
  // reducers: {
  //   otherReducer,
  // }
  reducers: {
    initUser: (state:any) => {
      // localStorage.addItem("user", payload.id)
      return {
        ...state,
        id: initialState.id,
        name: initialState.name,
        isConfirmed: initialState.isConfirmed
      }
    },
    createUser: (state:any, { payload }:PayloadAction<UserIdentity>) => {
      // localStorage.addItem("user", payload.id)
      const userRef = ref(database, `/users`)
      push(userRef, payload)
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        isConfirmed: payload.isConfirmed,
      };
    },
    // getAllUsers: (state:any) => {
    //   const usersRef = ref(database, '/users')
    //   onValue(usersRef, (snapshot) => {
    //     const users = snapshot.val()
    //     const userList = 
    //   })
    //   return {
    //     ...state,
    //   }
    // },
    
    // getUser: (state: any, { payload }:PayloadAction<UserState>) => {
    //   const userRef = ref(database, '/users')
    //   return {
    //     ...state,
    //   }
    // },

  }
})

export const { initUser, createUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
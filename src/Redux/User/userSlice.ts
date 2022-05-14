import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'Redux/store'
import { getDatabase, ref, set, get, child, push, update, onValue } from 'firebase/database'
import { firebaseApp } from 'Services/firebase'
import { randomNumber } from 'Functions/randomNumber'
import { useState } from 'react'
import { async } from '@firebase/util'
const database = getDatabase(firebaseApp)

export interface UsersState {
  users: Array<UserState>,
}

export interface UserState {
  id: string,
  name: string,
  isConfirmed: boolean,
  movies: Array<object>,
  todos: Array<object>,
}
export const initialState: UserState = {
  id: `${randomNumber(1000,9999)}`,
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
export interface UserId {
  id: string,
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
    createUser: (state:UserState, { payload }:PayloadAction<UserIdentity>) => {
      localStorage.setItem("user", JSON.stringify(payload))
      set(ref(database, `users/${payload.id}`), {...payload})
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        isConfirmed: payload.isConfirmed
      };
    },
    getUser: (state: UserState, { payload }:PayloadAction<any>) => {
      onValue(ref(database, `users/${payload}`), (snapshot) => {
        const data = snapshot.val()
        console.log('DATA:', data)
      })
    },
  }
})

export const storeSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    getAllUsers: (state: UsersState) => {
      const userRef = ref(database, `users`)
      console.log('REF:', userRef)
      onValue(userRef, (snapshot) => {
        const data = snapshot.val()
      })
    },

  }
})

export const { createUser, getUser } = userSlice.actions
export const { getAllUsers } = storeSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
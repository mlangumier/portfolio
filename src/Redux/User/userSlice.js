import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  id: '1234',
  name: 'Visitor',
  isConfirmed: false,
  movies: [],
  todos: [],
}

export const LOCAL_STORAGE_USER = "portfolio:app:user"

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

// Add Loading / Done reducers aside (own reducer)

// Conserver le store au reload => persist :
// https://dev.to/dawnind/persist-redux-state-with-redux-persist-3k0d

export const userSlice = createSlice({
  name: 'user', 
  initialState,
  //* Possibility: 
  // reducers: {
  //   otherReducer,
  // }
  reducers: {
    getUser: (state, { payload }) => {
      console.log('USER FETCHED')
      return { ...state, ...payload }
    },
    createUser: (state, { payload }) => {
      localStorage.setItem(LOCAL_STORAGE_USER, payload.id)
      console.log('USER CREATED:', payload)
      return { ...state, ...payload };
    },
    updateUser: (state, { payload }) => {
      // localStorage.setItem(LOCAL_STORAGE_USER, payload.id)
      console.log('USER UPDATED:', payload)
      return { ...state, ...payload }
    },
    resetUser: (state) => {
      localStorage.setItem(LOCAL_STORAGE_USER, "")
      console.log('USER LOGGED OUT')
      return { ...state, ...initialState }
    }
  },
})

export const { getUser, createUser, updateUser, resetUser } = userSlice.actions
export default userSlice.reducer
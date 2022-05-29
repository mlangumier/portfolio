import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  id: '0000',
  name: 'Visitor',
  isConfirmed: false,
  movies: [],
  todos: [],
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

// Add Loading / Done reducers aside (own reducer)

export const userSlice = createSlice({
  name: 'user', 
  initialState,
  //* Possibility: 
  // reducers: {
  //   otherReducer,
  // }
  reducers: {
    getUser: (state, { payload }) => {
      return { ...state, ...payload }
    },
    createUser: (state, { payload }) => {
      localStorage.setItem("portfolio:app:user", JSON.stringify(payload))
      return { ...state, ...payload };
    },
    updateUser: (state, { payload }) => {
      localStorage.setItem("portfolio:app:user", JSON.stringify(payload))
      console.log('UPDATE:', payload)
      return { ...state, ...payload }
    },
    resetUser: (state) => {
      return { ...state, ...initialState }
    }
  },
})

export const { getUser, createUser, updateUser, resetUser } = userSlice.actions
export default userSlice.reducer
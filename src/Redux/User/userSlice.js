import { createSlice } from '@reduxjs/toolkit'

export const initialState = {}

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
    setUser: (state, { payload }) => {
      localStorage.setItem(LOCAL_STORAGE_USER, payload.name)
      return { ...state, ...payload }
    },
    logout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE_USER)
      return { ...state, ...initialState }
    }
  },
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer
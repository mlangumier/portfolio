import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserState {
  id: string,
  name: string,
  movies: Array<object>,
  todos: Array<object>,
}

const initialState: UserState = {
  id: '',
  name: '',
  movies: [],
  todos: [],
}

export const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    }
  }
})

export const { createUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
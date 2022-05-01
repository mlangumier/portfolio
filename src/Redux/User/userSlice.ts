import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'Redux/store'

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
    initUser: (state, action: PayloadAction<UserState>) => {
      // Get localStorage/state-storage or ask if has user (yes: find / no: create or let us create + reroll)
      state.id = action.payload.id;
      state.name = action.payload.name;
    }
  }
})

export const { initUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
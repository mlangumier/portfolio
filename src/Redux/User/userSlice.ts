import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'Redux/store'

interface UserState {
  id: string,
  name: string,
  isConfirmed: boolean,
  movies: Array<object>,
  todos: Array<object>,
}

const initialState: UserState = {
  id: '',
  name: '',
  isConfirmed: false,
  movies: [],
  todos: [],
}

export const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
    // test
    initUser: (state) => {
      state.id = 'Mathieu#8653';
      state.name = 'Mathieu';
    },
    updateUserName: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    }

  }
})

export const { initUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
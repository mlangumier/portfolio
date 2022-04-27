import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  userId: string,
  userName: string,
  movies: Array<object>,
  todos: Array<object>,
}

const initialState: UserState = {
  userId: "",
  userName: "",
  movies: [],
  todos: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    }
  }
})

export const { createUser } = userSlice.actions

export default userSlice.reducer
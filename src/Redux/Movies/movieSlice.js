import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state, { payload }) => {
      return { ...state, ...payload }
    }
  }
})

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer
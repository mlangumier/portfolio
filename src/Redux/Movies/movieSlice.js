import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state, { payload }) => {
      return [ ...payload ];
    },
    resetMovies: (state) => {
      return initialState;
    }
  }
})

export const { getMovies, resetMovies } = movieSlice.actions;
export default movieSlice.reducer
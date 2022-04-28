import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './User/reducer'

export const rootReducer = combineReducers({
  userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
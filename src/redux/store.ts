import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../redux/features/book/bookSlice'
export const store = configureStore({
  reducer: {
    todoBooks : bookReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
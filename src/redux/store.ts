import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../redux/features/book/bookSlice'
import { booksApi } from './api/itemCreateAPI'
export const store = configureStore({
  reducer: {
    todoBooks : bookReducer,
    [booksApi.reducerPath] : booksApi.reducer
  },
  middleware : (getDefaultMiddleware) => {
     return getDefaultMiddleware().concat(booksApi.middleware)
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
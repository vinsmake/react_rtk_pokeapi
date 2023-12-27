import { configureStore } from '@reduxjs/toolkit'
import { pokeApi } from './api/pokeapi'

export default configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(pokeApi.middleware),
})
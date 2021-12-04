import sampleCoffeeReducer from 'features/sampleCoffee/sampleCoffeeSlice'

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    sampleCoffee: sampleCoffeeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

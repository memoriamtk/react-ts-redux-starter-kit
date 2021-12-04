import { RootState } from 'app/store'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchCoffee, SampleCoffeeProps } from './sampleCoffeeAPI'

export type SampleCoffeeState = {
  value: SampleCoffeeProps
  status: 'idle' | 'loading' | 'failed'
}

const initialState: SampleCoffeeState = {
  value: [],
  status: 'idle',
}

export const doFetchCoffee = createAsyncThunk(
  'sampleCoffee/fetchCoffee',
  async () => {
    const response = await fetchCoffee()
    return response
  }
)

export const sampleCoffeeSlice = createSlice({
  name: 'sampleCoffee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doFetchCoffee.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(doFetchCoffee.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
  },
})

export const selectCoffee = (state: RootState): SampleCoffeeState['value'] =>
  state.sampleCoffee.value

export default sampleCoffeeSlice.reducer

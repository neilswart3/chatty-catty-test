import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'
import { InitialLoadState } from './types'

const initialState: InitialLoadState = {
  isLoading: false,
  error: null,
}

export const initialLoadSlice = createSlice({
  name: 'initialLoad',
  initialState,
  reducers: {
    initialLoadRequest: helpers.initialLoadRequest,
    initialLoadSuccess: helpers.initialLoadSuccess,
    initialLoadFailed: helpers.initialLoadFailed,
  },
})

export const { initialLoadRequest, initialLoadFailed, initialLoadSuccess } =
  initialLoadSlice.actions

export default initialLoadSlice.reducer

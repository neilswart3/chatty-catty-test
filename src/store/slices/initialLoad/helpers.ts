import { PayloadAction } from '@reduxjs/toolkit'
import { InitialLoadFailedPayload, InitialLoadState } from './types'

export const initialLoadRequest = (
  state: InitialLoadState
): InitialLoadState => ({
  ...state,
  isLoading: true,
  error: null,
})

export const initialLoadFailed = (
  state: InitialLoadState,
  { payload }: PayloadAction<InitialLoadFailedPayload>
): InitialLoadState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const initialLoadSuccess = (
  state: InitialLoadState
): InitialLoadState => ({
  ...state,
  isLoading: false,
  error: null,
})

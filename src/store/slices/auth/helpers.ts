import { PayloadAction } from '@reduxjs/toolkit'
import {
  AuthState,
  AuthRequestPayload,
  AuthFailedPayload,
  AuthSuccessPayload,
} from './types'

export const authRequest = (
  state: AuthState,
  _action: { payload: PayloadAction<AuthRequestPayload> }
): AuthState => ({
  ...state,
  isLoading: true,
  error: null,
})

export const authFailed = (
  state: AuthState,
  { payload }: PayloadAction<AuthFailedPayload>
): AuthState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const authSuccess = (
  state: AuthState,
  { payload }: PayloadAction<AuthSuccessPayload>
): AuthState => ({
  ...state,
  isLoading: false,
  data: payload.data,
  error: null,
})

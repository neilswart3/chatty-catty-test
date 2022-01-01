import { PayloadAction } from '@reduxjs/toolkit'
import {
  AuthState,
  RegisterRequestPayload,
  RegisterFailedPayload,
  RegisterSuccessPayload,
} from './types'

export const registerRequest = (
  state: AuthState,
  _action: { payload: PayloadAction<RegisterRequestPayload> }
): AuthState => ({
  ...state,
  isLoading: true,
  error: null,
})

export const registerFailed = (
  state: AuthState,
  { payload }: PayloadAction<RegisterFailedPayload>
): AuthState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const registerSuccess = (
  state: AuthState,
  { payload }: PayloadAction<RegisterSuccessPayload>
): AuthState => ({
  ...state,
  isLoading: false,
  data: payload.data,
  error: null,
})

import { FormattedError } from 'src/lib/utils/types'

export interface User {
  uid: string | null
  accessToken: string | null
  displayName: string | null
  email: string | null
  photoURL: string | null
}

export enum authTypes {
  AUTH_REQUEST = 'auth/request',
  AUTH_FAILED = 'auth/failed',
  AUTH_SUCCESS = 'auth/success',
}

export interface AuthState {
  data: User
  isLoading: boolean
  error: FormattedError | null
}

export interface AuthRequestPayload {
  authType: 'login' | 'register'
  email: string
  password: string
}

export interface AuthFailedPayload {
  error: FormattedError | null
}

export interface AuthSuccessPayload {
  data: User
}

export interface AuthRequest {
  type: typeof authTypes.AUTH_REQUEST
  payload: AuthRequestPayload
}

export interface AuthFailed {
  type: typeof authTypes.AUTH_FAILED
  payload: AuthFailedPayload
}

export interface AuthSuccess {
  type: typeof authTypes.AUTH_SUCCESS
  payload: AuthSuccessPayload
}

export type AuthActions = AuthRequest | AuthSuccess | AuthFailed

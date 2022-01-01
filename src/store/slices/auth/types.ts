import { FormattedError } from 'src/lib/utils/types'

export interface User {
  uid: string | null
  accessToken: string | null
  displayName: string | null
  email: string | null
  photoURL: string | null
}

export enum authTypes {
  AUTH_REGISTER_REQUEST = 'auth/registerRequest',
  AUTH_REGISTER_FAILED = 'auth/registerFailed',
  AUTH_REGISTER_SUCCESS = 'auth/registerSuccess',
}

export interface AuthState {
  data: User
  isLoading: boolean
  error: FormattedError | null
}

export interface RegisterRequestPayload {
  email: string
  password: string
}

export interface RegisterFailedPayload {
  error: FormattedError | null
}

export interface RegisterSuccessPayload {
  data: User
}

export interface RegisterRequest {
  type: typeof authTypes.AUTH_REGISTER_REQUEST
  payload: RegisterRequestPayload
}

export interface RegisterFailed {
  type: typeof authTypes.AUTH_REGISTER_FAILED
  payload: RegisterFailedPayload
}

export interface RegisterSuccess {
  type: typeof authTypes.AUTH_REGISTER_SUCCESS
  payload: RegisterSuccessPayload
}

export type AuthActions = RegisterRequest | RegisterSuccess | RegisterFailed

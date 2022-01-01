import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'
import { AuthState } from './types'

const initialState: AuthState = {
  data: {
    uid: null,
    accessToken: null,
    displayName: null,
    email: null,
    photoURL: null,
  },
  isLoading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    request: helpers.authRequest,
    success: helpers.authSuccess,
    failed: helpers.authFailed,
  },
})

const { request, success, failed } = authSlice.actions

export const auth = { request, success, failed }

export const selectAuth = (state: any) => state.auth

export default authSlice.reducer

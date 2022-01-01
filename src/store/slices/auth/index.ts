import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'
import { AuthState } from './types'

const initialState: AuthState = {
  data: {
    uid: null,
    accessToken: null,
    displayName: null,
    email: null,
    photoUrl: null,
  },
  isLoading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerRequest: helpers.registerRequest,
    registerSuccess: helpers.registerSuccess,
    registerFailed: helpers.registerFailed,
  },
})

export const { registerRequest, registerFailed, registerSuccess } =
  authSlice.actions

export const selectAuth = (state: any) => state.auth

export default authSlice.reducer

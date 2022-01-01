import { TakeableChannel } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthFactory } from 'src/lib/factories'
import { formatError, ManageLocalStorage } from 'src/lib/utils'
import { auth } from 'src/store/slices/auth'
import { authTypes, AuthRequest } from 'src/store/slices/auth/types'

export function* handleAuth({ payload }: AuthRequest): any {
  const { email, password, authType } = payload

  try {
    const authApi =
      authType === 'login' ? AuthFactory.signIn : AuthFactory.createUser

    const { user } = yield call(authApi, { email, password })
    const { accessToken, uid, displayName, email: userEmail, photoURL } = user

    const data = { accessToken, uid, displayName, email: userEmail, photoURL }

    ManageLocalStorage.set(data)

    yield put(auth.success({ data }))
  } catch (err) {
    const error = formatError(err)

    yield put(auth.failed({ error }))
  }
}

export function* authWatcher() {
  yield takeLatest(
    authTypes.AUTH_REQUEST as unknown as TakeableChannel<unknown>,
    handleAuth
  )
}

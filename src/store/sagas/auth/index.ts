import { TakeableChannel } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthFactory } from 'src/lib/factories'
import { formatError, ManageLocalStorage } from 'src/lib/utils'
import { registerFailed, registerSuccess } from 'src/store/slices/auth'
import { authTypes, RegisterRequest } from 'src/store/slices/auth/types'

function* handleAuth({ payload }: RegisterRequest): any {
  const { email, password } = payload

  try {
    const { user } = yield call(AuthFactory.createUser, { email, password })
    const { accessToken, uid, displayName, email: userEmail, photoURL } = user

    const data = { accessToken, uid, displayName, email: userEmail, photoURL }

    ManageLocalStorage.set(data)

    yield put(registerSuccess({ data }))

    const testUser = ManageLocalStorage.get()

    console.log('testUser:', testUser)
  } catch (err) {
    const error = formatError(err)

    yield put(registerFailed({ error }))
  }
}

export function* authWatcher() {
  yield takeLatest(
    authTypes.AUTH_REGISTER_REQUEST as unknown as TakeableChannel<unknown>,
    handleAuth
  )
}

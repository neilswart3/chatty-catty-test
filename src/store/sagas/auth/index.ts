import { TakeableChannel } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthFactory } from 'src/lib/factories'
import { formatError } from 'src/lib/utils'
import { registerFailed } from 'src/store/slices/auth'
import { authTypes, RegisterRequest } from 'src/store/slices/auth/types'

function* handleAuth({ payload }: RegisterRequest): any {
  const { email, password } = payload

  // console.log('email:', email)
  // console.log('password:', password)

  try {
    const data = yield call(AuthFactory.createUser, { email, password })

    console.log('data:', data)
    // const user = yield call(
    //   rsf.auth.createUserWithEmailAndPassword,
    //   email,
    //   password
    // )

    // console.log('user:', user)
  } catch (err) {
    const error = formatError(err)

    yield put(registerFailed({ error }))

    // console.log('error:', error)
  }

  // yield call(firebase.rsf?.auth.createUserWithEmailAndPassword, email, password)

  // try {
  //   const data: ResponseGenerator = yield call(
  //     isLogin ? signInUser : createUser,
  //     {
  //       email,
  //       password,
  //     }
  //   )
  //   if (data.user) {
  //     const { accessToken, email, uid } = data.user
  //     yield put(
  //       authSuccess({
  //         data: {
  //           accessToken,
  //           email,
  //           uid,
  //         },
  //       })
  //     )
  //     window.localStorage.setItem(
  //       'tbcmsAC',
  //       JSON.stringify({ accessToken, email, uid })
  //     )
  //   }
  //   if (data.error) {
  //     const message = getReadableErrorMessage(data.error)
  //     yield put(authFailure({ error: message }))
  //   }
  // } catch (error) {
  //   const message = getErrorMessage(error as Error)
  //   yield put(authFailure({ error: message }))
  // }
}

export function* authWatcher() {
  yield takeLatest(
    authTypes.AUTH_REGISTER_REQUEST as unknown as TakeableChannel<unknown>,
    handleAuth
  )
}

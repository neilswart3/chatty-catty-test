import { all, fork } from 'redux-saga/effects'
import { authWatcher } from './auth'
import { initialLoadWatcher } from './initialLoad'

export function* rootSaga() {
  yield all([fork(authWatcher), fork(initialLoadWatcher)])
}

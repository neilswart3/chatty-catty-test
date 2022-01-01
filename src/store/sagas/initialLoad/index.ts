import { TakeableChannel } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { initialLoadTypes } from 'src/store/slices/initialLoad/types'

function* handleInitialLoad(): any {
  yield null

  // try {
  //   // yield call(handleAuth)

  // } catch (error) {}
}

export function* initialLoadWatcher() {
  yield takeLatest(
    initialLoadTypes.INITIAL_LOAD_REQUEST as unknown as TakeableChannel<unknown>,
    handleInitialLoad
  )
}

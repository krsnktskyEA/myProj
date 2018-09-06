//  CONFIGURING MIDDLEWARE (SAGAS)------------------------------------------------
import { fork, takeEvery, put } from 'redux-saga/effects'
import * as actions from '../actions/index'


function* SagaInc() {
  try {
    yield put(actions.increment())
  } catch (error) {
    yield put(actions.err())
  }
}

function* SagaIncWatcher() {
  yield takeEvery(actions.incrementBtn, SagaInc)
}

function* SagaDec() {
  try {
    yield put(actions.decrement())
  } catch (error) {
    yield put(actions.err())
  }
}

function* SagaDecWatcher() {
  yield takeEvery(actions.decrementBtn, SagaDec)
}

function* RootSaga() {
  yield [
    fork(SagaIncWatcher),
    fork(SagaDecWatcher),
  ]
}

export default RootSaga

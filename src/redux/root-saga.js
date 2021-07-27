import {all, call } from 'redux-saga/effects';
import { fecthCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([
    call(fecthCollectionsStart),
    call(userSagas)
  ])
}
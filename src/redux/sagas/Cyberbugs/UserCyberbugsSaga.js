import Axios from 'axios';

import {call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { USER_SIGIN_API } from '../../constants/Cyberbugs/Cyberbugs';

function* signinSaga(action) {
    console.log(action);
}

export function* theoDoiSignin() {
    yield takeLatest(USER_SIGIN_API, signinSaga);
}
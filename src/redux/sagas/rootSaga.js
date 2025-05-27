import { all } from "redux-saga/effects";

import * as Cyberbugs from "./Cyberbugs/UserCyberbugsSaga";

export function* rootSaga() {
    yield all([
        Cyberbugs.theoDoiSignin(),
    ]);
}
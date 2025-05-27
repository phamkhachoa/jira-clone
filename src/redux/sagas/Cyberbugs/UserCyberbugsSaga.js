import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { USER_SIGIN_API } from '../../constants/Cyberbugs/Cyberbugs';
import { cyberbugsService } from '../../../services/CyberbugsService';

function* signinSaga(action) {
    console.log(action);
    yield put({
        type: "DISPLAY_LOADING"
    });
    yield delay(2000);

    // Call api
    var userLogin = action.userLogin;
    try {
        const { data, status } = yield cyberbugsService.signinCyberBugs(userLogin);

        // luu vao localstorea khi dang nhap thanh conghttps://www.baeldung.com/spring-security-oauth2-jws-jwk
        localStorage.setItem("access_token", data.content.accessToken)
        console.log(data)
        action.navigate("/home")
    } catch (err) {
        console.log(err)
    }

    yield put({
        type: "HIDE_LOADING"
    });
}

export function* theoDoiSignin() {
    yield takeLatest(USER_SIGIN_API, signinSaga);
}
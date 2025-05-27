import { USER_SIGIN_API } from "../constants/Cyberbugs/Cyberbugs"


export const signinCyberbugAction = (email, password, navigate) => {
    return {
        type: USER_SIGIN_API,
        userLogin: {
            email: email,
            passWord: password
        }, navigate: navigate,
    }
}
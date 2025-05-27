
import { DOMAIN_CYBERBUG } from "../util/constants/settingSyctem"
import axios, { isCancel, AxiosError } from 'axios';

export const cyberbugsService = {
    signinCyberBugs: (userLogin) => {
        // return Axios({
        //     url: `${DOMAIN_CYBERBUG}/users/signin`,
        //     method: "POST",
        //     data: userLogin
        // })
        return axios({
            method: 'post',
            url: `${DOMAIN_CYBERBUG}/Users/signin`,
            data: userLogin
        });
    }
}
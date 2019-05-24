import { LOGIN_USER, LOGOUT_USER } from './actionTypes'

export const loginUser = (uid, email) => {
    return {
        type: LOGIN_USER,
        payload: {uid,email}
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}
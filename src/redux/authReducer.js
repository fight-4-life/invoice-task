import {authAPI} from "../api/api";

export const setLogin = (login) => ({type: SET_LOGIN, login})
const SET_LOGIN = 'SET_LOGIN';

export const setAvatarUrl = (avatar_url, isAuth) => ({type: SET_AVATAR, avatar_url, isAuth})
const SET_AVATAR = 'SET_AVATAR';

export const setError = (hasError) => ({type: SHOW_ERROR, hasError})
const SHOW_ERROR = 'SHOW_ERROR'

export const getAuthUserData = (login) => {
    return (dispatch) => {
        authAPI.getUserData(login)
            .then(response => {
                if (response.status === 200)
                    dispatch(setAvatarUrl(response.data.avatar_url, true))
            })
            .catch(() => dispatch(setError(true))
            )
    }
}

const initialState = {
    login: null,
    avatar_url: '',
    isAuth: false,
    hasError: false,
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AVATAR:
            return {
                ...state,
                avatar_url: action.avatar_url,
                isAuth: action.isAuth
            }
        case SET_LOGIN:
            return {
                ...state,
                login: action.login
            }
        case SHOW_ERROR:
            return {
                ...state,
                hasError: action.hasError
            }
        default:
            return state
    }
}


export default authReducer
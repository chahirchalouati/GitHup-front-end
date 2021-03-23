
import AUTH_TYPES from '../types/AUTH_TYPES'

export const signInStart = () => ({
    type: AUTH_TYPES.SIGN_IN_START,

})
export const signInSuccess = (payload) => ({
    type: AUTH_TYPES.SIGN_IN_SUCCESS,
    payload: payload
})
export const signInfail = (message) => ({
    type: AUTH_TYPES.SIGN_IN_FAIL,
    payload: message
})

export const signUpStart = () => ({
    type: AUTH_TYPES.SIGN_UP_START,

})
export const signUpSuccess = (payload) => ({
    type: AUTH_TYPES.SIGN_UP_SUCCESS,
    payload: payload
})
export const signUpfail = (message) => ({
    type: AUTH_TYPES.SIGN_UP_FAIL,
    payload: message
})
export const resetSignUpState = () => ({
    type: AUTH_TYPES.RESET_SIGN_UP_STATE,

})
export const accountCreatedSuccess = (message) => ({
    type: AUTH_TYPES.ACCOUNT_CREATED_SUCCESS,

})

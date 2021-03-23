
import CODETYPES from '../types/CODE_TYPES'

export const getCodeStart = () => ({
    type: CODETYPES.GET_CODE_START,

})
export const getCodeSuccess = (payload) => ({
    type: CODETYPES.GET_CODE_SUCCESS,
    payload: payload

})
export const getCodefail = (message) => ({
    type: CODETYPES.GET_CODE_FAIL,
    payload: message

})
export const getCodeReset = () => ({
    type: CODETYPES.GET_CODE_RESET,


})
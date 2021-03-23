import AUTHTYPES from "../types/AUTH_TYPES";

const initialState = {
    isAuthenticated: false,
    role: "USER",
    user: null,
    signInStart: false,
    signInSuccess: false,
    signInFail: false,

    signUpStart: false,
    signUpSuccess: false,
    signUpFail: false,



    error: null,
};
const RX_AUTH = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTHTYPES.SIGN_IN_START:
            return {
                ...state,
                isAuthenticated: false,
                signInStart: true,
                signInSuccess: false,
                signInFail: false,
                error: null,
            };
        case AUTHTYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                signInStart: false,
                signInSuccess: true,
                signInFail: false,
                error: null,
            };
        case AUTHTYPES.SIGN_IN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                signInStart: false,
                signInSuccess: false,
                signInFail: true, accountIsCreated: false,
                error: payload,
            };
        case AUTHTYPES.SIGN_UP_START:
            return {
                ...state,
                signUpStart: true,
                signUpSuccess: false,
                signUpFail: false, accountIsCreated: false,

                error: null,
            };
        case AUTHTYPES.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpStart: false,
                signUpSuccess: true,
                signUpFail: false,
                error: null,
            };
        case AUTHTYPES.SIGN_UP_FAIL:
            return {
                ...state,
                signUpStart: false,
                signUpSuccess: false,
                signUpFail: true,

                error: payload,
            };
        case AUTHTYPES.RESET_SIGN_UP_STATE:
            return {
                ...state,
                signUpStart: false,
                signUpSuccess: false,
                signUpFail: false,

                error: null,
            };
        case AUTHTYPES.AUTH_RESET:
            return {
                isAuthenticated: false,
                signInStart: false,
                signInSuccess: false,
                signInFail: false,
                signUpStart: false,
                signUpSuccess: false,
                signUpFail: false,

                error: null,
            };

        default:
            return state;
    }
};

export default RX_AUTH;

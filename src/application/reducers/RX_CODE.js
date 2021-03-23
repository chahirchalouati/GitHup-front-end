import CODETYPES from "../types/CODE_TYPES";

const initialState = {
    code: null,
    get_code_start: false,
    get_code_success: false,
    get_code_fail: false,
};
const RX_CODE = (state = initialState, { type, payload }) => {
    switch (type) {
        case CODETYPES.GET_CODE_START:
            return {
                ...state,
                code: null,
                get_code_start: true,
                get_code_success: false,
                get_code_fail: false,
            };

        case CODETYPES.GET_CODE_SUCCESS:
            return {
                ...state,
                code: payload,
                get_code_start: false,
                get_code_success: true,
                get_code_fail: false,
            };
        case CODETYPES.GET_CODE_FAIL:
            return {
                ...state,
                code: null,
                get_code_start: false,
                get_code_success: false,
                get_code_fail: true,
            };
        case CODETYPES.GET_CODE_RESET:
            return {
                ...state,
                code: null,
                get_code_start: false,
                get_code_success: false,
                get_code_fail: false,
            };
        default:
            return state;
    }
};

export default RX_CODE;

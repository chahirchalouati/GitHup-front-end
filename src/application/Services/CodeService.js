import {
    getCodefail,
    getCodeStart,
    getCodeSuccess,
} from "../action/CodesAction";

/**
 * get single code of repository
 * @param {link  repository} link
 * @returns code of file as string
 */
export const getCode = (link) => {
    return async (dispatch, getState, httpClient) => {
        try {
            dispatch(getCodeStart);
            const { data } = await httpClient.get(link);
            console.log(link);
            dispatch(getCodeSuccess(data));
        } catch (error) {
            dispatch(getCodefail(error.response.message));
        }
    };
};

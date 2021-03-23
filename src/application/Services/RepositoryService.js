import {
    getRepositoriesFail,
    getRepositoriesStart,
    getRepositoriesSuccess,
} from "../action/RespositoryAction";


export const getAllRepositories = () => {
    return async (dispatch, getState, httpClient) => {
        try {
            dispatch(getRepositoriesStart());
            const { data } = await httpClient.get("/repository");
            dispatch(getRepositoriesSuccess(data));
        } catch (error) {
            const message = error.response.message;
            dispatch(getRepositoriesFail(message));
        }
    };
};

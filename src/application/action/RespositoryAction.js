import REPOSITORY_TYPES from "../types/REPO_TYPES";

export const getRepositoriesStart = () => ({
    type: REPOSITORY_TYPES.GET_REPO_ALL_START,
});
export const getRepositoriesSuccess = (data) => ({
    type: REPOSITORY_TYPES.GET_REPO_ALL_SUCCESS,
    payload: data,
});
export const getRepositoriesFail = (message) => ({
    type: REPOSITORY_TYPES.GET_REPO_ALL_FAIL,
    payload: message,
});

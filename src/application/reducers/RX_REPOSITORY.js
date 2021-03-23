import REPOSITORY_TYPES from "../types/REPO_TYPES";

const initialState = {
    repositories: [],
    getAllRepoStart: false,
    getAllRepoSuccess: false,
    getAllRepoFail: false,
    error: null,
};

const RX_REPOSITORY = (state = initialState, { type, payload }) => {
    switch (type) {
        case REPOSITORY_TYPES.GET_REPO_ALL_START:
            return {
                ...state,
                getAllRepoStart: true,
                getAllRepoSuccess: false,
                getAllRepoFail: false,
                error: null,
            };
        case REPOSITORY_TYPES.GET_REPO_ALL_SUCCESS:
            return {
                ...state,
                repositories: payload,
                getAllRepoStart: false,
                getAllRepoSuccess: true,
                getAllRepoFail: false,
                error: null,
            };
        case REPOSITORY_TYPES.GET_REPO_ALL_FAIL:
            return {
                ...state,

                getAllRepoStart: false,
                getAllRepoSuccess: false,
                getAllRepoFail: true,
                error: payload,
            };
        case REPOSITORY_TYPES.GET_REPO_ALL_RESET:
            return {
                ...state,
                repositories: [],
                getAllRepoStart: false,
                getAllRepoSuccess: false,
                getAllRepoFail: false,
                error: null,
            };
        default:
            return state;
    }
};
export default RX_REPOSITORY;

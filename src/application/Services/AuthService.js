import {
  signInfail,
  signInStart,
  signInSuccess,
  signUpfail,
  signUpStart,
  signUpSuccess,
} from "../action/AuthenticationAction";
import AUTH_TYPES from "../types/AUTH_TYPES";
import Debug from "../debug/Debug";

export const SignInRequest = (request) => {
  return async (dispatch, getState, httpClient) => {
    try {
      dispatch(signInStart());
      const { data } = await httpClient.post("/signin", { ...request });
      Debug(data)
      dispatch(signInSuccess(data));
    } catch (error) {
      Debug(error.response.data.message)
      dispatch(signInfail(error.response.message));
    }
  };
};


export const SignUpRequest = (request) => {
  return async (dispatch, getState, httpClient) => {
    try {
      Debug(request);
      dispatch(signUpStart());
      const { data } = await httpClient.post("/signup", request);
      dispatch(signUpSuccess(data));
    } catch (error) {
      dispatch(signUpfail(error.response.message));
    }
  };
};
export const LogOutRequest = (request) => (dispatch) => {
  dispatch({ type: AUTH_TYPES.AUTH_RESET });
};

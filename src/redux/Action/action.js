import { SET_MOVIES_SUCCESS, START_MOVIES_REQUEST, SET_MOVIES_ERROR } from "./actionTypes";

export function setMoviesSuccess(total, movies) {
  return {
    type: SET_MOVIES_SUCCESS,
    payload: { total, movies },
  };
}

export function startMoviesRequest() {
  return {
    type: START_MOVIES_REQUEST,
  };
}

export function setMoviesError(error) {
  return {
    type: SET_MOVIES_ERROR,
    payload: error,
  };
}

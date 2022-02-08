import { START_MOVIES_REQUEST, SET_MOVIES_SUCCESS, SET_MOVIES_ERROR } from "../Action/actionTypes";

export const initialState = {
  loading: true,
  movies: [],
  total: 0,
  errorMessage: null,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case SET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        total: action.payload.total,
      };
    case SET_MOVIES_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

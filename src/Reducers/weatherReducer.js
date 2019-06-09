import {weatherConstants} from "../Constants";

const INITIAL_STATE = {
  request: false,
  error: false,
  data: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherConstants.WEATHER_REQUEST:
      return {
        ...state,
        request: true,
        error: false
      };
    case weatherConstants.WEATHER_ERROR:
      return {
        ...state,
        error: action.error,
        request: false
      };
    case weatherConstants.WEATHER_SUCCESS:
      return {
        ...state,
        data: action.data,
        request: false
      };
    default:
      return state
  }
};
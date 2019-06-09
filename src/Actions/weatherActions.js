import {weatherConstants} from "../Constants";

export const weatherSearch = (newValue) => (dispatch) => {
  dispatch({type: weatherConstants.WEATHER_SEARCH, value: newValue});
};
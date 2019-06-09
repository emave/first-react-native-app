import {currentDayConstants} from "../Constants";

export const currentDayChange = (currentDay) => (dispatch) => {
  dispatch({type: currentDayConstants.CURRENT_DAY_CHANGE, payload: currentDay});
};
import {currentDayConstants} from "../Constants";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case currentDayConstants.CURRENT_DAY_CHANGE:
      return action.payload;
    default:
      return state
  }
};
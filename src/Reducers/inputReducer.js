import {inputConstants} from "../Constants";

const INITIAL_STATE = {
  value: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case inputConstants.INPUT_CHANGE:
      return {...state, value: action.value};
    default:
      return state
  }
};
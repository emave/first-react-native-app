import {inputConstants} from "../Constants";

export const inputChange = (newValue) => (dispatch) => {
  dispatch({type: inputConstants.INPUT_CHANGE, value: newValue});
};
import * as types from "../actions";

export const characters = (state = [], action) => {
  switch (action.type) {
    case types.SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case types.SPINNER_ON: 
      return true;
    case types.SPINNER_OFF:
      return false;
    default:
      return state;
  }
}

export const error = (state = null, action) => {
  switch (action.type) {
    case types.FAILURE:
      return action.payload;
    default:
      return state;
  }
}
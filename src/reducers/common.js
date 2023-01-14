import { SET_USER, SET_PRODUCT, SET_CONFIRMED_PRODUCT } from "../constants";

const INITIAL_STATE = {
  productSelected: {},
  userDetails: {},
  confirmedProduct: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userDetails: action.payload };

    case SET_PRODUCT:
      return { ...state, productSelected: action.payload };

    case SET_CONFIRMED_PRODUCT:
      return { ...state, confirmedProduct: action.payload };

    default:
      return state;
  }
};

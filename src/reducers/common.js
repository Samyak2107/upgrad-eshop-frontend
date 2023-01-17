import {
  SET_USER,
  SET_PRODUCT,
  SET_CONFIRMED_PRODUCT,
  SET_PRODUCT_FOR_EDITING,
} from "../constants";

const INITIAL_STATE = {
  productSelected: {},
  userDetails: {},
  confirmedProduct: {},
  productForEditing: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      console.log("User details in redux => ", action.payload);
      return { ...state, userDetails: action.payload };

    case SET_PRODUCT:
      return { ...state, productSelected: action.payload };

    case SET_CONFIRMED_PRODUCT:
      return { ...state, confirmedProduct: action.payload };

    case SET_PRODUCT_FOR_EDITING:
      return { ...state, productForEditing: action.payload };

    default:
      return state;
  }
};

import { combineReducers } from 'redux';

const InitialState = {
  logged_in: false,
  user: {},
};

const currentUser = (state = InitialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload.user);
      return { ...state, logged_in: true, user: action.payload.user };
    case 'LOG_OUT':
      return { ...state, logged_in: false, user: {} };
    default:
      return state;
  }
};

const InitialCart = {
  Cart: [],
};

const Cart = (state = InitialCart, action) => {
  switch (action.type) {
    case 'ADD_CART':
		state.Cart.push(action.payload.obj);
      return { ...state };
    case 'TRUNK_CART':
      return { ...state, Cart: [] };
    default:
      return state;
  }
};
const SeApp = combineReducers({
  currentUser,
  Cart,
});

export default SeApp;

import { combineReducers } from 'redux';
import axios from 'axios';

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
		const duplic = state.Cart.findIndex((e) => {
			return e.name === action.payload.obj.name
		});
		if(duplic !== -1){
			state.Cart[duplic].quantity += action.payload.obj.quantity;
		}
		else{
			state.Cart.push({...action.payload.obj, key: state.Cart.length + 1});
		}
		return { ...state };
	case 'SET_CART':
		state.Cart = action.payload.obj;
		return { ...state }
	case 'UPDATE_CART':
	  state.Cart[action.payload.key].quantity += action.payload.quantity;
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

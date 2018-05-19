import { SETUSER } from '../actions';
import { combineReducers } from 'redux';

const InitialState = {
  logged_in: false,
  user : {},
  Cart: [],
};

const currentUser = (state = InitialState, action) => {
  switch (action.type) {
    case SETUSER:
      return Object.assign({}, state, {
        logged_in: true,
      });
    default:
      return state;
  }
};

const SeApp = combineReducers({
  currentUser,
});

export default SeApp;

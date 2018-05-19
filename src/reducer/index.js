import { SETUSER } from '../actions';
import { combineReducers } from 'redux';

const InitialState = {
	logged_in: false,
	Cart: [],
};

const currentUser = (state = counterInitialState, action) => {
	switch(action.type) {
		case SETUSER:
			return Object.assign({}, state, {
				logged_in: true,
			});
		default:
			return state;
	}
};

const SE_App = combineReducers({
	currentUser,
});

export default SE_App;

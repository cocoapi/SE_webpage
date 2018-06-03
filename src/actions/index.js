const SETUSER = 'SET_USER';
const ADDCART = 'ADD_CART';
const UPDATECART = 'UPDATE_CART';

export const setUser = user => (dispatch) => {
  dispatch({
    type: SETUSER,
    payload: {
      user,
    },
  });
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
};

export const addCart = obj => (dispatch) => {
  dispatch({
    type: ADDCART,
    payload: {
      obj,
    },
  });
};

export const updateCart = (key, quantity) => (dispatch) => {
	dispatch({
		type: UPDATECART,
		payload:{
			key,
			quantity,
		},
	});
};

export const trunkCart = () => (dispatch) => {
  dispatch({ type: 'TRUNK_CART'});
};

const SETUSER = 'SET_USER';
const ADDCART = 'ADD_CART';

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

export const trunkCart = () => (dispatch) => {
  dispatch({ type: 'TRUNK_CART'});
};

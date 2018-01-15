import { AUTH_REMOVE_TOKEN, AUTH_REMOVE_TOKEN } from '../actions/actionTypes'

const initialState = {
  token: null,
  expiryDate: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
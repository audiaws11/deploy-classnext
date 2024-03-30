import { Action, State } from './type.types';

const initialState: State = {
  count: 0,
  isLoading: true,
  cart: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'CART':
      return {
        ...state,
        cart: [...action.value],
      };
    default:
      return state;
  }
};

export default reducer;

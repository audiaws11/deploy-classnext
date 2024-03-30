import { store } from '../store';

export const increment = () => {
  store.dispatch({ type: 'INCREMENT' });
};

export const setLoading = (value: boolean) => {
  store.dispatch({ type: 'SET_LOADING', value });
};

export const setCart = (value: string[]) => {
  store.dispatch({ type: 'CART', value });
};

export const deleteCart = () => {
  store.dispatch({ type: 'CART', value: [] });
};

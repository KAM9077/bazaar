import { FETCH_ORDERS, FETCH_ORDER_TYPES, HISTORY_ERROR } from '../actions/types';

const INITIAL_STATE = { orders: [], type: '', types: [], error: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, orders: action.payload.orders };
    case FETCH_ORDER_TYPES:
      return { ...state, types: action.payload.types };
    case HISTORY_ERROR:
      return { ...state, error: action.payload };
  }

  return state;
}

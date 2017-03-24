import { FETCH_ORDER, ORDER_ERROR } from '../actions/types';

const INITIAL_STATE = { order: {}, error: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ORDER:
      return { ...state, order: action.payload.order };
    case ORDER_ERROR:
      return { ...state, error: action.payload };
  }

  return state;
}

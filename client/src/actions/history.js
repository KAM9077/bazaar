import { reset } from 'redux-form';
import { getData, postData, putData, deleteData } from './index';
import io from 'socket.io-client';
import { FETCH_ORDERS, FETCH_ORDER_TYPES, HISTORY_ERROR } from './types';

// Connect to socket.io server
export const socket = io.connect('http://localhost:3000');


//= ===============================
// History actions
//= ===============================
export function fetchTypes(userId) {
  const url = `/history/${userId}`;
  return dispatch => getData(FETCH_ORDER_TYPES, HISTORY_ERROR, true, url, dispatch);
}

export function fetchOrders(userId, tye) {
  const url = `/history/${userId}/${type}`;
  return dispatch => getData(FETCH_ORDERS, HISTORY_ERROR, true, url, dispatch);
}

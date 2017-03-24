import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import cookie from 'react-cookie';
import { composeWithDevTools } from 'redux-devtools-extension';

import routes from './routes';
import reducers from './reducers/index';
// import ReactGA from 'react-ga';
import { AUTH_USER } from './actions/types';

// Import stylesheets
import './public/stylesheets/base.scss';

// Initialize Google Analytics
// ReactGA.initialize('UA-000000-01');

function logPageView() {
  // ReactGA.pageview(window.location.pathname);
}

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk)
));

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>,
  document.querySelector('.wrapper'));

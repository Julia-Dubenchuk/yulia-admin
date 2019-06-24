import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducers';
import thunk from 'redux-thunk';
import history from '../history';
import { AUTH_SIGN_IN_SUCCESS } from '../constants';
const client = axios.create({
  baseURL: 'https://test-bo.cosmocareportal.com/api/v1',
  responseType: 'json',
})
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(  
        thunk,
        axiosMiddleware(client),
        routerMiddleware(history)),
    );



const store = createStore(reducer(history), enhancer);

store.dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: localStorage.getItem('auth') });


export default store;

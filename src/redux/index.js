import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducer from './reducers';
import thunk from 'redux-thunk';
import history from '../history';
import localForage from "localforage";
import { AUTH_SIGN_IN } from '../constants';
// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';

// const client = axios.create({
//   baseURL: 'https://test-bo.cosmocareportal.com/api/v1',
//   responseType: 'json',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Accept-Language': 'es'
//   }
// });

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(  
        thunk,
        routerMiddleware(history)),
    );



const store = createStore(connectRouter(history)(reducer), enhancer);

// localForage.getItem('auth').then((response) => {
//   if (response !== null) {
//     store.dispatch({ type: AUTH_SIGN_IN, payload: response });
//   }
// })
store.dispatch({ type: AUTH_SIGN_IN, payload: localStorage.getItem('auth') });
// localStorage.getItem('auth');

// const enhancer = composeEnhancers(
//   applyMiddleware(  
//     thunk,
//     axiosMiddleware(client)),
// );

// const store = createStore(
//   connectRouter(history)(reducer), enhancer);

export default store;

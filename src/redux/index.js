import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from './reducers';
import thunk from 'redux-thunk';
import history from '../history';
import { AUTH_SIGN_IN } from '../constants';
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(  
        thunk,
        routerMiddleware(history)),
    );



const store = createStore(reducer(history), enhancer);

store.dispatch({ type: AUTH_SIGN_IN, payload: localStorage.getItem('auth') });


export default store;

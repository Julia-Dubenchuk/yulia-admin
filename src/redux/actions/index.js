import { AUTH_SIGN_IN, GET_PROFILES } from '../../constants';
import axios from 'axios';
import history from '../../history';
import localForage from "localforage";

export function authAdmin(item) {
    return {
        type: AUTH_SIGN_IN,
        payload: item,
    }
}

export function dataUsers(item) {
    console.log('dataUsers action', item);
    return {
        type: GET_PROFILES,
        payload: item,
    }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit) {
  return {
    type: RECEIVE_POSTS,
    payload: subreddit,
  }
}

export function fetchPosts() {
    return function (dispatch) {
      dispatch(requestPosts());
      const localToken = JSON.parse(localStorage.getItem('auth'));
      return axios.get(`${url}/vcprofiles/`, { headers: { 'Authorization': `Token ${localToken}` } })
      .then((data) => {
          console.log('dataUser', data.data.results);
          // dispatch(data.data.results);
        //   dispatch(dataUsers(data.data.results));
        dispatch(receivePosts(data.data.results));
      })
      .catch((err) => console.log('getDataUsers error', err));
        // return dispatch(receivePosts(subreddit));
  
    }
  }

// export function getToken(formData) {
//     console.log('FD', formData);
//     return {
//         type: AUTH_SIGN_IN,
//         payload:  {
//             request: {
//                 url: 'auth/login/',
//                 data: formData,
//                 method: 'post',
//                 headers: {
//                 'Accept': 'application/json',
//                 'Accept-Language': 'es'
//                 }
//             },
//             options: {
//                 onSuccess({ getState, dispatch, response }) {
//                     console.log('onsuccess');
//                     if (response.data === true) {
//                         console.log('response.data = true');
//                         dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: response.data });
//                     } else {
//                         console.log('not true');
//                     }
//                 console.log('success', response);
//                 },
//                 onError({ getState, dispatch, error }) {
//                     console.log('error');
//                 }, 
//             }
//         },
//     }
// }
const url = 'https://test-bo.cosmocareportal.com/api/v1';
export function getToken(formData, dispatch) {
    let data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.set(key, formData[key])
    });
    axios.post(`${url}/auth/login/`, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then((res) => {
            console.log('reslogin', res);
            if (res.data.is_staff === true) {
                // localStorage.setItem('auth', res.data.token).then(() => {
                //     dispatch(authAdmin(res.data.token));
                // })
                localStorage.setItem('auth', JSON.stringify(res.data.token));
                dispatch(authAdmin(res.data.token));
        }})
        .then(() => {
            console.log('history', history);
            history.push('/data-table');
        })
        .then((err) => console.log('error', err));
}

function queryService(response, dispatch) {
    console.log('respo', dispatch);
    axios.get(`${url}/vcprofiles/`, { headers: { 'Authorization': `Token ${response}` } })
    .then((data) => {
        console.log('dataUser', data.data.results);
        // dispatch(data.data.results);
        dispatch(dataUsers(data.data.results));
    })
    .catch((err) => console.log('getDataUsers error', err));
}

export function getDataUsers(dispatch) {
    console.log('disp', dispatch);
    const localToken = JSON.parse(localStorage.getItem('auth'));
    axios.get(`${url}/vcprofiles/`, { headers: { 'Authorization': `Token ${localToken}` } })
    .then((data) => {
        console.log('dataUser', data.data.results);
        return dispatch(dataUsers(data.data.results));
        // return data.data.results;
        // dispatch(data.data.results);
        // dispatch(dataUsers(data.data.results));
    })
    .catch((err) => console.log('getDataUsers error', err));
    // localForage.getItem('auth').then((response) => {
    //     queryService(response, dispatch);
    // });
}
/*
admin1@gmail.com
12345678
*/

// import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
// import {reducer as reduxFormReducer} from 'redux-form';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';
// import { connectRouter, routerMiddleware } from 'connected-react-router';

// import localForage from "localforage";
// import {
//   cryptoTableReducer,
//   newOrderTableReducer,
//   sidebarReducer,
//   themeReducer,
//   customizerReducer,
//   commonReducer,
//   accountReducer,
//   authReducer,
//   geoReducer,
//   clientReducer,
//   userListReducer,
//   busquedaFilters,
//   filtersQuestion,
//   facturationReducer,
//   questionsReducer,
//   productReducer,
//   messagesReducer,
//   webSocketReducer
// } from '../redux/reducers/index';

// import { 
//   common_fetchCountries, 
//   COMMON_FETCH_COUNTRIES_SUCCESS,
//   common_fetchData,
//   COMMON_FETCH_DATA_SUCCESS 
// } from '../redux/actions/commonActions';

// import {
//   AUTH_SIGN_IN_SUCCESS
// } from '../redux/actions/authActions';

// const client = axios.create({ //all axios can be used, shown in axios documentation
//   baseURL: process.env.REACT_APP_API_URL,//'http://192.168.0.211:8001/api/v1/',
//   responseType: 'json',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Accept-Language': 'es'
//   }
// });
// const createHistory = require('history').createBrowserHistory;

// export const history = createHistory();
// console.log(process.env)
// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form",
//   theme: themeReducer,
//   sidebar: sidebarReducer,
//   cryptoTable: cryptoTableReducer,
//   newOrder: newOrderTableReducer,
//   customizer: customizerReducer,
//   common: commonReducer,
//   account: accountReducer,
//   auth: authReducer,
//   geo: geoReducer,
//   client: clientReducer,
//   userList: userListReducer,
//   filters: busquedaFilters,
//   filtersQuestion: filtersQuestion,
//   questions: questionsReducer,
//   petitions: facturationReducer,
//   products: productReducer,
//   messages:messagesReducer,
//   ws: webSocketReducer
// });

// // const DEVTOOLS = window.REDUX_DEVTOOLS_EXTENSION()
// const composeEnhancers = typeof window === 'object' && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE 
//   ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({}) 
//   : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(  
//     thunk,
//     axiosMiddleware(client)),
// );

// const store = createStore(
//   connectRouter(history)(reducer), enhancer);

// // const store = (window.devToolsExtension
// //   ? window.devToolsExtension()(createStore)
// //   : createStore)(reducer);

// // Initiate inital requests

// localForage.getItem('countries').then((response) => {
//   if (response !== null) {
//     store.dispatch({ type: COMMON_FETCH_COUNTRIES_SUCCESS, payload: response });
//   } else {
//     store.dispatch(common_fetchCountries())
//   }
// })

// localForage.getItem('common').then((response) => {
//   if (response !== null) {
//     store.dispatch({ type: COMMON_FETCH_DATA_SUCCESS, payload: response });
//   } else {
//     store.dispatch(common_fetchData())
//   }
// })

// localForage.getItem('auth').then((response) => {
//   if (response !== null) {
//     store.dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: response });
//   }
// })

// export default store;
import { 
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_SUCCESS, 
  REQUEST_PROFILES, 
  RECEIVE_PROFILES,
  GET_USER_ID, 
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_CLOSE,
  REQUEST_CITIES,
  RECEIVE_CITIES,
  REQUEST_PROFILES_ID,
  RECEIVE_PROFILES_ID,
  RECEIVE_PROFILES_ID_ERROR, 
  OPEN,
  OPEN_NOTIFICATION_SUCCESS,
  OPEN_NOTIFICATION_ERROR
 } from '../../constants';
import axios from 'axios';
import history from '../../history';

const API = 'https://test-bo.cosmocareportal.com/api/v1';

// export const authAdmin = (formData) => ({
//   type: AUTH_SIGN_IN,
//   payload: {
//     request:{
//       url:`${API}/auth/login/`,
//       data: formData,
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       }
//     },
//     options: {
//       onSuccess({ getState, dispatch, response }) {
//         console.log('response');
//         // if (response.data.is_staff) {
//           localStorage.setItem('auth', JSON.stringify(response.data.token));
//           dispatch({type: AUTH_SIGN_IN_SUCCESS, payload: response.data.token});
//         // }
//         history.push('/data-table');
//       },
//       onError({ getState, dispatch }) { 
//         console.log('errrrrr');    
//         dispatch({ type: OPEN_NOTIFICATION_ERROR, payload: 'Error Authorization' });
//      }, 
//     },
//   }
// });

export const authAdmin = (item) => {
  return {
    type: AUTH_SIGN_IN,
    payload: item,
  }
};

export function getToken(formData, dispatch) {
  let data = new FormData();
  Object.keys(formData).forEach((key) => {
    data.set(key, formData[key])
  });
  axios.post(`${API}/auth/login/`, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then((res) => {
          if (res.data.is_staff) {
              localStorage.setItem('auth', JSON.stringify(res.data.token));
              dispatch(authAdmin(res.data.token));
      }})
      .then(() => history.push('/data-table'))
      .catch((err) => console.log('error', err));
}

export const requestProfiles = (token) => ({
  type: REQUEST_PROFILES,
  payload: {
    request:{
      url:`/vcprofiles/`,
      method: 'get',
      headers: {
        'Authorization': `Token ${token}`,
      }
    },
    options: {
      onSuccess({ getState, dispatch, response }) {
        dispatch({ type: RECEIVE_PROFILES, payload: response.data.results });
      },
      onError({ getState, dispatch }) {     
        dispatch({ type: OPEN_NOTIFICATION_ERROR, payload: 'This is error network! You can\'t get profiles.' });
     }, 
    },
  }
});

const localToken = JSON.parse(localStorage.getItem('auth'));
export const requestProfilesId = (id) => ({
  type: REQUEST_PROFILES_ID,
  payload: {
    request:{
      url:`/vcprofiles/${id}/`,
      method: 'get',
      headers: {
        'Authorization': `Token ${localToken}`,
      }
    },
    options: {
      onSuccess({ getState, dispatch, response }) {
        response.status === 200 && dispatch({ type: RECEIVE_PROFILES_ID, payload: response.data });
      },
      onError({ getState, dispatch }) {     
        dispatch({type: RECEIVE_PROFILES_ID_ERROR});
     }, 
    },
  }
});

export const getUserId = (id) => ({
  type: GET_USER_ID,
  id,
});

export const updateProfiles = (item) => ({
  type: UPDATE_PROFILE,
  payload: item,
});

// export const updateProfilesError = () => ({
//   type: UPDATE_PROFILES_ERROR,
// });

// export const updateProfilesClose = () => ({
//   type: UPDATE_PROFILES_CLOSE,
// });

export const updateProfile = (formData, id) => {
  console.log('update formData', formData);
  return (dispatch) => {
    // localStorage.getItem('auth').then(response => {
      // console.log('LocalStorage', response);
      dispatch({
        type: UPDATE_PROFILE,
        body: formData,
        payload: {
          request:{
            url:`/vcprofiles/${id}/`,
            method: 'patch',
            headers: {
              'Authorization': `Token ${localToken}`,
            }
          },
          options: {
            onSuccess({ getState, dispatch, response }) {
              console.log('updateNew', response);
              dispatch({type: UPDATE_PROFILE_SUCCESS, payload: response.data});
              dispatch({type: OPEN_NOTIFICATION_SUCCESS, message: 'This is success update!'});
            },
            onError({ getState, dispatch }) {     
              dispatch({type: OPEN_NOTIFICATION_ERROR, message: 'This is error update!'});
            }, 
          },
        }   
      // })
    });
  }
};

// export function queryUpdateProfiles(formData, dispatch) {
//   const localToken = JSON.parse(localStorage.getItem('auth'));
//   let data = new FormData();
//   Object.keys(formData).forEach((key) => {
//     data.set(key, formData[key])
//   });
//   axios.patch(`${API}/vcprofiles/${formData.id}/`, data, { headers: { 'Authorization': `Token ${localToken}` } })
//     .then((res) => {
//       dispatch(updateProfiles(res.data));
//       dispatch({type: OPEN_NOTIFICATION_SUCCESS, message: 'This is success update!'});
//     })
//     .catch(() => dispatch({type: OPEN_NOTIFICATION_ERROR, message: 'This is error update!'}));
// }

export const isOpen = (item) => ({
  type: OPEN,
  payload: item,
});

export const requestCities = (token) => ({
  type: REQUEST_CITIES,
  payload: {
    request:{
      url:`/geo/countries/`,
      method: 'get',
      headers: {
        'Authorization': `Token ${token}`,
      }
    },
    options: {
      onSuccess({ getState, dispatch, response }) {
        dispatch({ type: RECEIVE_CITIES, payload: response.data.results });
      },
      onError({ getState, dispatch }) {     
        dispatch({ type: OPEN_NOTIFICATION_ERROR, payload: 'This is error network! You can\'t get cities.' });
     }, 
    },
  }
});

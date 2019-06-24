import { 
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_SUCCESS, 
  REQUEST_PROFILES, 
  RECEIVE_PROFILES,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  REQUEST_CITIES,
  RECEIVE_CITIES,
  REQUEST_PROFILES_ID,
  RECEIVE_PROFILES_ID,
  RECEIVE_PROFILES_ID_ERROR, 
  OPEN,
  OPEN_NOTIFICATION_SUCCESS,
  OPEN_NOTIFICATION_ERROR
 } from '../../constants';
import history from '../../history';

const transformData = (formData) => {
  let data = new FormData();
  Object.keys(formData).forEach((key) => {
    data.set(key, formData[key])
  });
  return data;
};
 
export const authAccount = (data) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SIGN_IN,
      payload: {
        request:{
          url: `/auth/login/`,
          data: transformData(data),
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        },
        options: {
          onSuccess({ getState, dispatch, response }) {
              localStorage.setItem('auth', JSON.stringify(response.data.token));
              dispatch({type: AUTH_SIGN_IN_SUCCESS, payload: response.data.token});
              history.push('/data-table');
          },
          onError({ getState, dispatch }) {   
            dispatch({ type: OPEN_NOTIFICATION_ERROR, message: 'Error Authorization' });
        }, 
        },
      }
    });
  }
}

export const requestProfiles = (id) => ({
  type: REQUEST_PROFILES,
  payload: {
    request:{
      url:`/vcprofiles/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${id}`,
      }
    },
    options: {
      onSuccess({ getState, dispatch, response }) {
        dispatch({ type: RECEIVE_PROFILES, payload: response.data.results });
      },
      onError({ getState, dispatch }) {     
        dispatch({ type: OPEN_NOTIFICATION_ERROR, message: 'This is error network! You can\'t get profiles.' });
     }, 
    },
  }
});

export const requestProfilesId = (id) => ({
  type: REQUEST_PROFILES_ID,
  payload: {
    request:{
      url:`/vcprofiles/${id}/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${JSON.parse(localStorage.getItem('auth'))}`,
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

export const updateProfile = (data) => {
  return (dispatch) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          request:{
            url:`/vcprofiles/${data.id}/`,
            method: 'PATCH',
            data: transformData(data),
            headers: {
              'Authorization': `Token ${JSON.parse(localStorage.getItem('auth'))}`,
            }
          },
          options: {
            onSuccess({ getState, dispatch, response }) {
              dispatch({type: UPDATE_PROFILE_SUCCESS, payload: response.data});
              dispatch({type: OPEN_NOTIFICATION_SUCCESS, message: 'This is success update!'});
            },
            onError({ getState, dispatch }) {   
              dispatch({type: OPEN_NOTIFICATION_ERROR, message: 'This is error update!'});
            }, 
          },
        }  
    });
  }
};

export const requestCities = () => ({
  type: REQUEST_CITIES,
  payload: {
    request:{
      url:`/geo/countries/`,
      method: 'get',
      headers: {
        'Authorization': `Token ${JSON.parse(localStorage.getItem('auth'))}`,
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

export const isOpen = (item) => ({
  type: OPEN,
  payload: item,
});

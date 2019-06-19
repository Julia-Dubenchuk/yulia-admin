import { 
  AUTH_SIGN_IN, 
  REQUEST_PROFILES, 
  RECEIVE_PROFILES, 
  GET_USER_ID, 
  UPDATE_PROFILES,
  UPDATE_PROFILES_ERROR,
  UPDATE_PROFILES_CLOSE,
  RECEIVE_CITIES,
  RECEIVE_PROFILES_ID,
  RECEIVE_PROFILES_ID_ERROR, 
  OPEN } from '../../constants';
import axios from 'axios';
import history from '../../history';

const API = 'https://test-bo.cosmocareportal.com/api/v1';

export const authAdmin = (item) => {
  return {
    type: AUTH_SIGN_IN,
    payload: item,
  }
};

export const requestProfiles = () => ({
  type: REQUEST_PROFILES,
});

export const receiveProfiles = (items) => ({
  type: RECEIVE_PROFILES,
  payload: items,
});

export const receiveProfilesId = (items) => ({
  type: RECEIVE_PROFILES_ID,
  payload: items,
});

export const receiveProfilesIdError = () => ({
  type: RECEIVE_PROFILES_ID_ERROR,
});

export const getUserId = (id) => ({
  type: GET_USER_ID,
  id,
});

export const updateProfiles = (item) => ({
  type: UPDATE_PROFILES,
  payload: item,
});

export const updateProfilesError = () => ({
  type: UPDATE_PROFILES_ERROR,
});

export const updateProfilesClose = () => ({
  type: UPDATE_PROFILES_CLOSE,
});

export const receiveCities = (items) => ({
  type: RECEIVE_CITIES,
  payload: items,
});

export const isOpen = (item) => ({
  type: OPEN,
  payload: item,
});

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

export const getCities = (token) => dispatch => {
  axios.get(`${API}/geo/countries/`, { headers: { 'Authorization': `Token ${token}` } })
    .then(response => dispatch(receiveCities(response.data.results)))
    .catch((err) => console.log('error', err));
};

export const queryGetProfiles = token => dispatch => {
  dispatch(requestProfiles());

  axios.get(`${API}/vcprofiles/`, { headers: { 'Authorization': `Token ${token}` } })
    .then(response => {
      dispatch(receiveProfiles(response.data.results))})
    .catch((err) => console.log('error', err));
};

export const queryGetProfilesId = id => dispatch => {
  const localToken = JSON.parse(localStorage.getItem('auth'));
  axios.get(`${API}/vcprofiles/${id}/`, { headers: { 'Authorization': `Token ${localToken}` } })
    .then(response => {
      response.status === 200 && dispatch(receiveProfilesId(response.data))})
    .catch((err) => dispatch(receiveProfilesIdError()));
};

export function queryUpdateProfiles(formData, dispatch) {
  const localToken = JSON.parse(localStorage.getItem('auth'));
  let data = new FormData();
  Object.keys(formData).forEach((key) => {
    data.set(key, formData[key])
  });
  axios.patch(`${API}/vcprofiles/${formData.id}/`, data, { headers: { 'Authorization': `Token ${localToken}` } })
    .then((res) => dispatch(updateProfiles(res.data)))
    .catch(() => dispatch(updateProfilesError()));
}


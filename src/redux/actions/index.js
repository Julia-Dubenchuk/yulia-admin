import { AUTH_SIGN_IN, REQUEST_PROFILES, RECEIVE_PROFILES, GET_USER_ID, UPDATE_PROFILES, OPEN } from '../../constants';
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

export const getUserId = (id) => ({
  type: GET_USER_ID,
  id,
});

export const updateProfiles = (item) => ({
  type: UPDATE_PROFILES,
  payload: item,
});

export const isOpen = () => ({
  type: OPEN,
})



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

export const queryGetProfiles = token => dispatch => {
  dispatch(requestProfiles());

  axios.get(`${API}/vcprofiles/`, { headers: { 'Authorization': `Token ${token}` } })
    .then(response => {
      console.log('resp', response);
      dispatch(receiveProfiles(response.data.results))})
    .catch((err) => console.log('error', err));
};

export function queryUpdateProfiles(formData, dispatch) {
  const localToken = JSON.parse(localStorage.getItem('auth'));
  let data = new FormData();
  Object.keys(formData).forEach((key) => {
    data.set(key, formData[key])
  });
  axios.put(`${API}/vcprofiles/${formData.id}/`, data, { headers: { 'Authorization': `Token ${localToken}` } })
    .then((res) => dispatch(updateProfiles(res.data)))
    .then(() => dispatch(queryGetProfiles(localToken)))
    .catch((err) => console.log('error', err));
}


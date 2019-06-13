import { AUTH_SIGN_IN, GET_PROFILES } from '../../constants';
import axios from 'axios';
import history from '../../history';

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



const url = 'https://test-bo.cosmocareportal.com/api/v1';
export function getToken(formData, dispatch) {
    let data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.set(key, formData[key])
    });
    axios.post(`${url}/auth/login/`, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then((res) => {
            if (res.data.is_staff === true) {
                localStorage.setItem('auth', JSON.stringify(res.data.token));
                dispatch(authAdmin(res.data.token));
        }})
        .then(() => {
            history.push('/data-table');
        })
        .then((err) => console.log('error', err));
}

// export function getDataUsers(dispatch) {
//     console.log('disp', dispatch);
//     const localToken = JSON.parse(localStorage.getItem('auth'));
//     axios.get(`${url}/vcprofiles/`, { headers: { 'Authorization': `Token ${localToken}` } })
//     .then((data) => {
//         console.log('dataUser', data.data.results);
//         return dispatch(dataUsers(data.data.results));

//     })
//     .catch((err) => console.log('getDataUsers error', err));
// }

import { AUTH_SIGN_IN, AUTH_SIGN_IN_SUCCESS,
    GET_PROFILES } from '../../constants';

export default (initialState = '', { type, payload }) => {
    console.log('reducer', type, payload);
    switch(type) {
        case AUTH_SIGN_IN:
            console.log('AUTH_SIGN_IN');
            return payload;
        case AUTH_SIGN_IN_SUCCESS:
            return payload;
        case GET_PROFILES:
            console.log('GET_PROFILES', payload);
            return payload;
        default:
            return initialState;
    }
};
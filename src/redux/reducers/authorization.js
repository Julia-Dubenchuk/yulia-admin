import { AUTH_SIGN_IN, AUTH_SIGN_IN_SUCCESS } from '../../constants';

export default (initialState = '', { type, payload }) => {
    switch(type) {
        case AUTH_SIGN_IN:
            return initialState;
        case AUTH_SIGN_IN_SUCCESS:
            return payload;
        default:
            return initialState;
    }
};
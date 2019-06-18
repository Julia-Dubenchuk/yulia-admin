import { UPDATE_PROFILES, UPDATE_PROFILES_ERROR, UPDATE_PROFILES_CLOSE } from '../../constants';

const initialState = {
    open: false,
    variant: '',
    message: '',
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case UPDATE_PROFILES:
            return {
                open: true,
                variant: 'success',
                message: 'This is success update!',
                ...payload,
            };
        case UPDATE_PROFILES_ERROR:
            return {
                open: true,
                variant: 'error',
                message: 'This is error update!',
            }
        case UPDATE_PROFILES_CLOSE:
            return {
                ...state,
                open: false,
            }
        default:
            return state;
    }
};
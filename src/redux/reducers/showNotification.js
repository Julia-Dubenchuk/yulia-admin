import { OPEN_NOTIFICATION_SUCCESS, OPEN_NOTIFICATION_ERROR, CLOSE_NOTIFICATION } from '../../constants';

const initialState = {
    open: false,
    variant: '',
    message: '',
};

export default (state = initialState, { type, message }) => {
    switch(type) {
        case OPEN_NOTIFICATION_SUCCESS:
            return {
                open: true,
                variant: 'success',
                message,
            };
        case OPEN_NOTIFICATION_ERROR:
            return {
                open: true,
                variant: 'error',
                message,
            };
        case CLOSE_NOTIFICATION:
            return {
                ...state, 
                open: false,
            };
        default:
            return state;
    }
}
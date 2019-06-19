import { 
    UPDATE_PROFILES, 
    UPDATE_PROFILES_ERROR, 
    UPDATE_PROFILES_CLOSE, 
    RECEIVE_PROFILES_ID,
    RECEIVE_PROFILES_ID_ERROR,
} from '../../constants';

const initialState = {
    open: false,
    variant: '',
    message: '',
    isError: false,
    items: null,
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case UPDATE_PROFILES:
            return {
                open: true,
                variant: 'success',
                message: 'This is success update!',
                items: {
                    id: payload.id,
                    account_type: payload.account_type,
                    gender: payload.gender,
                    birthday: payload.birthday,
                    city: payload.city,
                    status: payload.status,
                    user: payload.user,
                    age: payload.age,
                },
            };
        case UPDATE_PROFILES_ERROR:
            return {
                open: true,
                variant: 'error',
                message: 'This is error update!',
                ...state,
            }
        case UPDATE_PROFILES_CLOSE:
            return {
                ...state,
                open: false,
            }
        case RECEIVE_PROFILES_ID:
            return {
                items: {
                    id: payload.id,
                    account_type: payload.account_type,
                    gender: payload.gender,
                    birthday: payload.birthday,
                    city: payload.city,
                    status: payload.status,
                    user: payload.user,
                    age: payload.age,
                },
            };
        case RECEIVE_PROFILES_ID_ERROR:
            return {
                isError: true,
            };
        default:
            return state;
    }
};
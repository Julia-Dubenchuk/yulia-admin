import { 
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_ERROR, 
    UPDATE_PROFILE_CLOSE,
    REQUEST_PROFILES_ID, 
    RECEIVE_PROFILES_ID,
    RECEIVE_PROFILES_ID_ERROR,
} from '../../constants';

const initialState = {
    isError: false,
    isLoader: false,
    items: null,
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case UPDATE_PROFILE:
            return {
                ...state,
                isLoader: true,
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isLoader: false,
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
        case UPDATE_PROFILE_ERROR:
            return {
                ...state,
            }
        case UPDATE_PROFILE_CLOSE:
            return {
                ...state,
                open: false,
            }
        case REQUEST_PROFILES_ID:
            return {
                ...state,
                isLoader: true,
            };
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
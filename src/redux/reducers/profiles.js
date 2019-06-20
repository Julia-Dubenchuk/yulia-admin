import { 
    REQUEST_PROFILES, 
    RECEIVE_PROFILES,
    RECEIVE_PROFILES_CLOSE, 
    RECEIVE_PROFILES_ERROR } from '../../constants';

const initialState = {
    isLoader: false,
    items: []
  };

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case REQUEST_PROFILES:
            return {
                ...state,
                isLoader: true,
              };
        case RECEIVE_PROFILES:
            return {
                isLoader: false,
                items: payload,
            };
        case RECEIVE_PROFILES_CLOSE:
            return {
                ...state,
                isLoader: true,
                // open: false,
                // variant: 'error',
                // message: 'This is error network! You can\'t get profiles.', 
            };
        case RECEIVE_PROFILES_ERROR:
            return {
                ...state,
                // open: true,
                // variant: 'error',
                // message: 'This is error network! You can\'t get profiles.', 
            };
        default:
            return state;
    }
};

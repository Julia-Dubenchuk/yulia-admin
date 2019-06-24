import { 
    REQUEST_PROFILES, 
    RECEIVE_PROFILES } from '../../constants';

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
        default:
            return state;
    }
};

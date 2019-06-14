import { REQUEST_PROFILES, RECEIVE_PROFILES } from '../../constants';

const initialState = {
    isFetching: false,
    items: []
  };

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case REQUEST_PROFILES:
            return {
                ...state,
                isFetching: true,
              };
        case RECEIVE_PROFILES:
            return {
                ...state,
                isFetching: false,
                items: payload,
            };
        default:
            return state;
    }
};

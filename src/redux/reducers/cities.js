import { RECEIVE_CITIES, REQUEST_CITIES } from '../../constants';

export default (initialState = [], { type, payload }) => {
    switch(type) {
        case REQUEST_CITIES:
            return initialState;
        case RECEIVE_CITIES:
            return payload;
        default:
            return initialState;
    }
};
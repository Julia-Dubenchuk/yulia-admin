import { RECEIVE_CITIES } from '../../constants';

export default (initialState = [], { type, payload }) => {
    switch(type) {
        case RECEIVE_CITIES:
            return payload;
        default:
            return initialState;
    }
};
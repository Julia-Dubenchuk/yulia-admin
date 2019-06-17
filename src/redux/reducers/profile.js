import { UPDATE_PROFILES } from '../../constants';

export default (state = null, { type, payload }) => {
    switch(type) {
        case UPDATE_PROFILES:
            return payload;
        default:
            return state;
    }
};
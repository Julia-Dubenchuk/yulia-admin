import { OPEN } from '../../constants';

export default (initialState = false, { type, payload }) => {
    switch(type) {
        case OPEN:
            return payload;
        default:
            return initialState;
    }
};
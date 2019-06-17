import { OPEN } from '../../constants';

export default (initialState = false, { type }) => {
    switch(type) {
        case OPEN:
            return !initialState;
        default:
            return initialState;
    }
};
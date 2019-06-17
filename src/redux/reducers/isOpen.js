import { OPEN } from '../../constants';

export default (initialState = false, { type }) => {
    console.log('ttt', type);
    switch(type) {
        case OPEN:
            console.log('11');
            return !initialState;
        default:
            return initialState;
    }
};
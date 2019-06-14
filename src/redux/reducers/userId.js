import { GET_USER_ID } from '../../constants';

export default (initialState = null, { type, id }) => {
    switch(type) {
        case GET_USER_ID:
            return id;
        default:
            return initialState;
    }
};
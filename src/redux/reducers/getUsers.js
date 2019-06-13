import { GET_PROFILES } from '../../constants';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

export default (initialState = [], { type, payload }) => {
    console.log('reducergetUsers', type, payload);
    switch(type) {
        case GET_PROFILES:
            console.log('GET_PROFILES', payload);
            return payload;
        case REQUEST_POSTS:
            return initialState;
        case RECEIVE_POSTS:
            return payload;
        default:
            return initialState;
    }
};
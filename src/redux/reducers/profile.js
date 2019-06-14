import { UPDATE_PROFILES } from '../../constants';

export default (state = null, { type, payload }) => {
    console.log('profile');
    switch(type) {
        case UPDATE_PROFILES:
            console.log('profile payload', payload);
            return payload;
        default:
            return state;
    }
};
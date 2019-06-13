const LOAD = 'redux-form-examples/account/LOAD';

export default (state = {}, action) => {
    switch(action.type) {
        case LOAD:
            return {
                data: action.data,
            };
        default:
            return state;
    }
};
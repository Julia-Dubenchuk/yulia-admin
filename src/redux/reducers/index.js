import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import authorization from './authorization';
import getUsers from './getUsers';

export default combineReducers({
    authorization,
    getUsers,
    form: reduxFormReducer,
});
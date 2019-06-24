import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import authorization from './authorization';
import profiles from './profiles';
import profile from './profile';
import isOpen from './isOpen';
import cities from './cities';
import showNotification from './showNotification';

export default (history) => combineReducers({
    authorization,
    router: connectRouter(history),
    profiles,
    profile,
    isOpen,
    cities,
    showNotification,
    form: reduxFormReducer,
});

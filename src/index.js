import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { Router  } from 'react-router-dom';
import store from './redux';
import './index.css';
import App from './app/App';
import history from './history';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router  history={history}>
            <App />
        </Router >
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();

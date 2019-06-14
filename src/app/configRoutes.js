import React from 'react';
import { connect } from 'react-redux';
// import { redirect } from '../redux/actions';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router';

const redirect = () => (dispatch) => {
    return dispatch(push('/authorization'));
};

const PrivateRoute = ({ component: Component, auth, redirect }) => {
    return auth ? <Route render={(props) => 
            <Component {...props} />
        } /> : <div>{redirect()}</div>
}

const mapStateToProps = (state) => ({
    auth: state.authorization,
});

const mapDispatchToProps = {
    redirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
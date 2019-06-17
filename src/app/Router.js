import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import history from '../history';
import Authorization from '../components/Authorization';
import DataTable from '../components/DataTable';

const Router = ({ authorization }) => {
    if(authorization) {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/data-table' component={DataTable} />
                    <Redirect to='/data-table' component={DataTable}/>          
                </Switch>
            </ConnectedRouter>
        )} else {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/authorization' component={Authorization} />
                    <Redirect to='/authorization' component={Authorization}/>
                </Switch>
            </ConnectedRouter>
        )
    }
};

export default connect(state => ({ authorization: state.authorization }))(Router);

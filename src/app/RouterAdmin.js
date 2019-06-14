import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import history from '../history';
import PrivateRoute  from './configRoutes';
import Authorization from '../components/Authorization';
import DataTable from '../components/DataTable';

const Router = ({ authorization }) => {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                 <Route exact path='/authorization' component={Authorization} />
                 <Route exact path='/data-table' component={DataTable} />
                    {/* {
                    authorization ?
                    <Redirect from='/authorization' to="/data-table"/> :
                    <Redirect from='/data-table' to="/authorization"/>
                    } */}
                    <PrivateRoute exact path='/data-table' component={DataTable} />
                    <PrivateRoute exact path='/authorization' component={Authorization} />
                  
                </Switch>
            </ConnectedRouter>
        )
};

export default connect(state => ({ authorization: state.authorization }))(Router);

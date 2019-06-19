import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import history from '../history';
import Authorization from '../components/Authorization';
import DataTable from '../components/DataTable';
import DialogUser from '../components/DialogUser';
import PageNotFound from '../components/PageNotFound';

const Router = () => {
    const authorization = useSelector(state => state.authorization);
    const profile = useSelector(state => state.profile.items);
    if(authorization) {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/data-table' component={DataTable} />
                    <Route exact path='/data-table/:id' render={({ match }) => 
                       <DialogUser userId={match.params.id} />
                    }/>
                    <Redirect from="/authorization" to='/data-table' component={DataTable}/>          
                    <Route path="*" component={PageNotFound} />
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

export default Router;

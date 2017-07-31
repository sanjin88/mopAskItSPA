import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Login from './components/login';
import Registration from './components/registration';

import store from './store';

const StoreInstance = store();

let requireAuthentication;

requireAuthentication = (nextState, replace) => {
    let isAuthenticated;

    isAuthenticated =  !!localStorage.getItem('id_token');

    if (!isAuthenticated) {
        replace('/login');
    }
};


const Routes = (props) => {

    return (
        <Router {...props}>
            <Route path="/">
                <IndexRoute component={App} onEnter={requireAuthentication} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
            </Route>
        </Router>
    )
};

export default Routes;

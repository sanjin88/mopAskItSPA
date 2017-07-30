import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Login from './components/login';
import Registration from './components/registration';


const Routes = (props) => {

    return (
        <Router {...props}>
            <Route path="/" component={App}>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
            </Route>
        </Router>
    )
};

export default Routes;

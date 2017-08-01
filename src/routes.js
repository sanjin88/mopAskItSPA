import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Login from './components/login';
import Registration from './components/registration';
import Profile from './components/profile';
import MyQuestions from './components/my-questions';
import Questions from './components/questions';
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
                <Route path="/" component={App}>
                <IndexRoute component={Questions} />
                <Route path="/profile" component={Profile} />
                <Route path="/my-questions" component={MyQuestions} />
                <Route path="/questions" component={Questions} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
            </Route>
        

        </Router>
    )
};

export default Routes;

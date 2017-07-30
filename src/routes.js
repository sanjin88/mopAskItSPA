import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';


const Routes = (props) => {

    return (
        <Router {...props}>
            <Route path="/" component={App} />
        </Router>
    )
};

export default Routes;

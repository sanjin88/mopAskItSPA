import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { browserHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store';

import Routes from './routes';
const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <Routes history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();









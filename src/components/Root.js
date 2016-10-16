import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, hashHistory} from 'react-router';

import App from './App.js';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/(:filter)" component={App}/>
        </Router>
    </Provider>
)

export default Root;
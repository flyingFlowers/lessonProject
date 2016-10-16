import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import store from './configureStore.js';
import Root from './components/Root.js';

const render = () => {
    ReactDom.render(
        <Root store={store}/>, document.getElementById("root"))
}
render();

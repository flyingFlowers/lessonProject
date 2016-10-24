import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import configureStore from './configureStore.js';
import Root from './components/Root.js';

const render = () => {
    ReactDom.render(
        <Root store={configureStore()}/>, document.getElementById("root"))
}
render();

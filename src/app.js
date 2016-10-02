import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';


let store = createStore(todos);

console.log('current:', store.getState());
console.log('dispatch ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    text: 'Allen'
});
console.log('current:', store.getState());
console.log('dispatch TOGGLE_TODO');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
});
console.log('current:', store.getState())

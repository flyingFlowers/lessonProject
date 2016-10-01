// import {combineReducers} from 'redux';
import todos from './todos.js';
import visiableFilter from './visiableFilter.js';

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        let newState = {};
        Object.keys(reducers).forEach((key) => {
            newState[key] = reducers[key](state[key], action);
        })
        return newState;
    }
}

// const combineReducers = (reducers) => (state = {}, action) => Object.keys(reducers).reduce((newState, key) => {
//     newState[key] = reducers[key](state[key], action);
//     return newState;
// }, {})

export default combineReducers({
    todos: todos,
    visiableFilter: visiableFilter
})
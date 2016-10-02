import {combineReducers} from 'redux';

import todos from './todos.js';
import visiableFilter from './visiableFilter.js';

export default combineReducers({
    todos,
    visiableFilter
});
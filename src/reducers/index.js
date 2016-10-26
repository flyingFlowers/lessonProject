import {combineReducers} from 'redux';

import byId, * as fromById from './byId.js';
import createList from './createList.js';

const idsByFilter = combineReducers({
    all: createList('all'),
    completed: createList('completed'),
    active: createList('active')
})

const todos = combineReducers({
    byId,
    idsByFilter
})

export default todos;

export const getVisibleTodos = (state, filter) => {
    return state.idsByFilter[filter].map((id) => fromById.getTodo(state.byId, id));
}
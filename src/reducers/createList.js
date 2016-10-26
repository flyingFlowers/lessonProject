import {combineReducers} from 'redux';
const createList = (filter) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case 'ADD_TODO_SUCCESS':
                if(filter == 'completed') {
                    return state;
                }
                return [...state, action.response.id];
            case 'FETCH_TODOS_SUCCESS':
                if (action.filter !== filter) {
                    return state;
                }
                return action.response.map(todo => todo.id);
            case 'TOGGLE_TODO_SUCCESS':
                let shouldRemove = (filter == 'completed' && action.response.completed == false) || (filter == 'active' && action.response.completed == true);
                // if(shouldRemove) {
                //     return state.filter(id => id !== action.response.id)
                // }
                // return state;
                return shouldRemove ? state.filter(id => id !== action.response.id) : state;
            default:
                return state;
        }
    }
    const isFetching = (state = false, action) => {
        switch(action.type) {
            case 'FETCH_TODOS_SUCCESS':
            case 'FETCH_TODOS_FAILURE':
                return false;
            case 'FETCH_TODOS_REQUEST':
                return true;
            default: 
                return state;
        }
    }
    const errorMessage = (state = '', action) => {
        switch(action.type) {
            case 'FETCH_TODOS_SUCCESS':
            case 'FETCH_TODOS_REQUEST':
                return '';
            case 'FETCH_TODOS_FAILURE':
                return action.message;
            default: 
                return state;
        }
    }
    return combineReducers({
        ids,
        isFetching,
        errorMessage
    })
}

export default createList;

export const getIsFetching = (state) => state.isFetching;

export const getIds = (state) => state.ids;

export const getErrorMessage = (state) => state.errorMessage;
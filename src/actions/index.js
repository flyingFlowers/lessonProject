import { v4 } from 'node-uuid';//生成随机id（不重复）
import * as api from '../api/index.js';

const setVisiableFilter = (filter) => {
    return { type: 'SET_VISIABLEFILTER', filter: filter };
}

export { setVisiableFilter };

const receiveTodos = (response, filter) => ({
    type: 'FETCH_TODOS_SUCCESS',
    response,
    filter,
});

const requestTodos = () => ({
    type: 'FETCH_TODOS_REQUEST'
})

const fetchTodosFailure = (message) => ({
    type: 'FETCH_TODOS_FAILURE',
    message
})

export const fetchTodos = (filter) => {
    return (dispatch) => {
        dispatch(requestTodos());
        api.fetchTodos(filter).then((response) => {
            dispatch(receiveTodos(response, filter));
        }, (error) => {
            dispatch(fetchTodosFailure(error.message || 'some error happen'))
        })
    }
}

const addTodoSuccess = (response) => ({
    type: 'ADD_TODO_SUCCESS',
    response
});
export const addTodo = (text) => {
    return (dispatch, getState) => {
        api.addTodo(text).then((response) => {
            dispatch(addTodoSuccess(response));
        })
    }
}

const toggleTodoSuccess = (response) => ({
    type: 'TOGGLE_TODO_SUCCESS',
    response
});
export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        api.toggleTodo(id).then((response) => {
            dispatch(toggleTodoSuccess(response));
        })
    }
}
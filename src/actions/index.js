import {v4} from 'node-uuid';//生成随机id（不重复）
import * as api from '../api/index.js';
const addTodo = (value) => {
    return {type: 'ADD_TODO', id: v4(), text: value};
}

const toggleTodo = (id) => {
    return {type: 'TOGGLE_TODO', id: id};
}

const setVisiableFilter = (filter) => {
    return {type: 'SET_VISIABLEFILTER', filter: filter};
}

export {addTodo, toggleTodo, setVisiableFilter};

const receiveTodos = (response, filter) => ({
    type: 'RECEIVE_TODOS',
    response,
    filter,
});

export const fetchTodos = (filter) => {
    return (dispatch) => {
        api.fetchTodos(filter).then((response) => {
            dispatch(receiveTodos(response));
        })
    }
}
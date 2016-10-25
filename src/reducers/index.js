import { combineReducers } from 'redux';

import todos, * as fromTodos from './todos.js';

export default combineReducers({
    todos
});

//selector   默认处理本文件中的数据(就是写参数的时候要注意些本层的state)
export const getVisibleTodos = (state, filter) => {
    //这里使用的是reducer文件夹中todos的selector：getAllTodos;
    const todos = fromTodos.getAllTodos(state.todos)

    // const todos = state.todos.allIds.map((id) => state.todos.byId[id]);
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(todo => todo.completed)
        case 'active':
            return todos.filter(todo => !todo.completed)
        default:
            throw new Error('unknow filter');
    }
};


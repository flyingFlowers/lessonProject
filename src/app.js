import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import rootReducer from './reducers/index.js';
import FilterLink from './components/FilterLink.js';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import Footer from './components/Footer.js';
const store = createStore(rootReducer);

const getVisibleTodos = (todos, visiableFilter) => {
    switch (visiableFilter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
        default:
            throw new Error('unknow filter');
    }
}

class App extends Component {
    render() {
        let {todos, visiableFilter} = store.getState();
        todos = getVisibleTodos(todos, visiableFilter);
        return (
            <div>
                <AddTodo handleClick={(value) => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: value
                    })
                } }/>
                <TodoList todos={todos} handleClick={(id) => {
                    console.log('trigger TodoList')
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id: id
                    })
                } }/>
                <Footer currentFilter={visiableFilter} handleClick={(filter) => {
                    store.dispatch({
                        type: 'SET_VISIABLEFILTER',
                        filter
                    })
                } }/>
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <App />,
        document.getElementById("root")
    )
}
render();

store.subscribe(render);
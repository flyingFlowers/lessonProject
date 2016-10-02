import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import rootReducer from './reducers/index.js';
import FilterLink from './components/FilterLink.js';

const store = createStore(rootReducer);
console.log(store);

const getVisibleTodos = (todos, visiableFilter) =>{
    switch(visiableFilter){
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
                <input type="text" ref="_Inp"></input>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.refs._Inp.value
                    })
                }}>ADD</button>
                <ul>
                    {
                        todos.map((todo) => {
                            return (
                                <li key={todo.id}
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                    }}
                                    onClick={() => {
                                    store.dispatch({
                                        type: 'TOGGLE_TODO',
                                        id: todo.id
                                    })
                                }}>{todo.text}</li>
                            )
                        })
                    }
                </ul>
                <FilterLink filter="SHOW_ALL" currentFilter={visiableFilter} handleClick={() => {
                    store.dispatch({
                        type: 'SET_VISIABLEFILTER',
                        filter: 'SHOW_ALL'
                    })
                }}>Show All</FilterLink>
                <FilterLink filter="SHOW_COMPLETED" currentFilter={visiableFilter} handleClick={() => {
                    store.dispatch({
                        type: 'SET_VISIABLEFILTER',
                        filter: 'SHOW_COMPLETED'
                    })
                }}>Show Completed</FilterLink>
                <FilterLink filter="SHOW_ACTIVE" currentFilter={visiableFilter} handleClick={() => {
                    store.dispatch({
                        type: 'SET_VISIABLEFILTER',
                        filter: 'SHOW_ACTIVE'
                    })
                }}>Show Active</FilterLink>
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
import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import rootReducer from './reducers/index.js';

let store = createStore(rootReducer);

class App extends Component {
    render() {
        const state = store.getState();
        let todos = state.todos;
        switch (state.visiableFilter) {
            case 'SHOW_ALL':
                todos = todos;
                break;
            case 'SHOW_COMPLETED':
                todos = todos.filter((todo) => todo.completed);
                break;
            case 'SHOW_ACTIVE':
                todos = todos.filter((todo) => !todo.completed);
                break;
        }
        return (
            <div>
                <input type="text" ref="_Inp"/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.refs._Inp.value,
                    })
                } }>Add</button>
                <ul>
                    {
                        todos.map((todo) => <li style={{
                            textDecoration: todo.completed ? 'line-through' : ''
                        }} key={todo.id} onClick={() => {
                            store.dispatch({
                                type: 'TOGGLE_TODO',
                                id: todo.id
                            })
                        } }>{todo.text}</li>)
                    }
                </ul>
                {
                    state.visiableFilter == 'SHOW_ALL' ? <span>Show All</span> : <a href="#" onClick={() => {
                        store.dispatch({
                            type: 'SHOW_ALL',
                        });
                    } }>Show All</a>
                }
                {
                    state.visiableFilter == 'SHOW_COMPLETED' ? <span>Show Completed</span> : <a href="#" onClick={() => {
                        store.dispatch({
                            type: 'SHOW_COMPLETED',
                        });
                        console.log('SHOW_COMPLETED')
                    } }>Show Completed</a>
                }
                {
                    state.visiableFilter == 'SHOW_ACTIVE' ? <span>Show Active</span> : <a href="#" onClick={() => {
                        store.dispatch({
                            type: 'SHOW_ACTIVE'
                        });
                        console.log('SHOW_ACTIVE')
                    } }>Show active</a>
                }
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <App/>,
        document.getElementById('root')
    )
}

render();
store.subscribe(render);

import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import rootReducer from './reducers/index.js';
import FilterLink from './components/FilterLink.js';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import Footer from './components/Footer.js';
const store = createStore(rootReducer);

class App extends Component {
    render() {
        let {todos, visiableFilter} = store.getState();
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                <Footer/>
            </div>
        )
    }
}

// class Provider extends Component {
//     getChildContext() {
//         return {
//             store: this.props.store
//         }
//     }
    
//     render() {
//         return (
//             this.props.children
//         )
//     }
// }

// Provider.childContextTypes = {
//     store: React.PropTypes.object
// }

const render = () => {
    ReactDom.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("root")
    )
}
render();

// store.subscribe(render);
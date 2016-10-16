import React, {Component} from 'react';

import AddTodo from '../containers/AddTodo.js';
import TodoList from '../containers/TodoList.js';
import Footer from '../containers/Footer.js';

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                <Footer/>
            </div>
        )
    }
}

export default App;
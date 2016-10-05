import React, {Component} from 'react';

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

class TodoList extends Component {
    componentDidMount() {
        const store = this.context.store;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const store = this.context.store;
        const state = store.getState();
        let {todos, visiableFilter} = state;
        todos = getVisibleTodos(todos, visiableFilter);
        const handleClick = (id) => {
            store.dispatch({type: 'TOGGLE_TODO', id: id})
        }

        return (
            <ul>
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            style={{
                            textDecoration: todo.completed
                                ? 'line-through'
                                : 'none'
                        }}
                            onClick={() => {
                            handleClick(todo.id);
                        }}>{todo.text}</li>
                    )
                })
}
            </ul>
        )
    }
}

const connect = () => {

}

TodoList.contextTypes = {
    store: React.PropTypes.object
}

export default TodoList;
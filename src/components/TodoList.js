import React, {Component} from 'react';

class TodoList extends Component {
    render() {
        return (
             <ul>
                    {
                        this.props.todos.map((todo) => {
                            return (
                                <li key={todo.id}
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                    }}
                                    onClick={() => {
                                        this.props.handleClick(todo.id);
                                    } }>{todo.text}</li>
                            )
                        })
                    }
                </ul>
        )
    }
}

export default TodoList;
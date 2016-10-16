import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {toggleTodo} from '../actions/index.js';

const getVisibleTodos = (todos, visiableFilter) => {
    switch (visiableFilter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(todo => todo.completed)
        case 'active':
            return todos.filter(todo => !todo.completed)
        default:
            throw new Error('unknow filter');
    }
}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .todos
                    .map((todo) => {
                        return (
                            <li
                                key={todo.id}
                                style={{
                                textDecoration: todo.completed
                                    ? 'line-through'
                                    : 'none'
                            }}
                                onClick={() => {
                                this
                                    .props
                                    .handleClick(todo.id);
                            }}>{todo.text}</li>
                        )
                    })
}
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, ownProps.params.filter || 'all')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
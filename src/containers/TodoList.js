import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleTodo, receiveTodos, fetchTodos } from '../actions/index.js';
import { getVisibleTodos } from '../reducers/index.js';
// import { fetchTodos } from '../api/index.js';

class TodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        //执行setState或者this.props改变，可以执行此函数
        if (prevProps.filter !== this.props.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        this.props.onFetchTodos(this.props.filter);
    }

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
                                } }>{todo.text}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.params.filter || 'all';
    return {
        //这里使用的是reducer文件夹中index的selector：getVisibleTodos
        todos: getVisibleTodos(state, filter),
        filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onReceiveTodos: (response, filter) => {
            dispatch(receiveTodos(response, filter));
        },
        onFetchTodos: (filter) => {
            dispatch(fetchTodos(filter));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
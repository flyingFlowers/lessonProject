import React, {Component} from 'react';
import {connect} from 'react-redux';

import {toggleTodo} from '../actions/index.js';

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

// const connect = (mapStateToProps, mapDispatchToProps) => {
//     return (WrapperComponent) => {
//         class Connect extends Component {
//             componentDidMount() {
//                 const store = this.context.store;
//                 this.unsubscribe = store.subscribe(() => {
//                     this.forceUpdate();
//                 })
//             }

//             componentWillUnmount() {
//                 this.unsubscribe();
//             }

//             render() {
//                 const store = this.context.store;
//                 const stateProps = mapStateToProps(store.getState());
//                 const dispatchProps = mapDispatchToProps(store.dispatch);
//                 const props = Object.assign({}, stateProps, dispatchProps);
//                 return React.createElement(WrapperComponent, props);
//                 // return <WrapperComponent {...props}/>;
//                 // return <WrapperComponent todos={props.todos} handleClick={props.handleClick}/>
//             }
//         }

//         Connect.contextTypes = {
//             store: React.PropTypes.object
//         }
//         return Connect;
//     }
// }

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visiableFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
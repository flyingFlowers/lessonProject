import {combineReducers} from 'redux';
const byId = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            //    let nextState = Object.assign({}, state);
            //    nextState[action.id] = {
            //        id: action.id,
            //        text: action.text,
            //        completed: false
            //    }
            //    return nextState;
            return Object.assign({}, state, {
                [action.id]: {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            })
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                [action.id]: {
                    id: action.id,
                    text: action.text,
                    completed: !action.id.completed
                }
            });
        case 'RECEIVE_TODOS':
            const nextState = {};
            action.response.forEach((todo) => {
                nextState[todo.id] = todo;
            })
            return nextState;
        default:
            return state;
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.id];
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

const todos = combineReducers({
    byId,
    allIds
})

export default todos;

//selector  外层使用的参数为本层的state
export const getAllTodos = (state) => {
    return state.allIds.map((id) => state.byId[id]);
}
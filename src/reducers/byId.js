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
            const nextState = Object.assign({}, state);
            action.response.forEach((todo) => {
                nextState[todo.id] = todo;
            })
            return nextState;
        default:
            return state;
    }
}

export default byId;

export const getTodo = (state, id) => state[id]; 
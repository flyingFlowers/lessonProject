let gid = 0;
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // let newState = [].concat(state);
            // return newState.push({
            //     id: ++gid,
            //     text: action.text,
            //     completed: false
            // });

            return [...state, {
                id: ++gid,
                text: action.text,
                completed: false
            }]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id == action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todos;
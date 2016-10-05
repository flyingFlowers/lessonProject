const addTodo = (value) => {
    return {type: 'ADD_TODO', text: value};
}

const toggleTodo = (id) => {
    return {type: 'TOGGLE_TODO', id: id};
}

const setVisiableFilter = (filter) => {
    return {type: 'SET_VISIABLEFILTER', filter: filter};
}

export {
    addTodo,
    toggleTodo,
    setVisiableFilter
};
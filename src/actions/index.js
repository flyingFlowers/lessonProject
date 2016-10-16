import {v4} from 'node-uuid';//生成随机id（不重复）

const addTodo = (value) => {
    return {type: 'ADD_TODO', id: v4(), text: value};
}

const toggleTodo = (id) => {
    return {type: 'TOGGLE_TODO', id: id};
}

const setVisiableFilter = (filter) => {
    return {type: 'SET_VISIABLEFILTER', filter: filter};
}

export {addTodo, toggleTodo, setVisiableFilter};
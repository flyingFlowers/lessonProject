import { v4 } from 'node-uuid';

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

const mockData = [
    { id: v4(), text: 'Allen1', completed: false },
    { id: v4(), text: 'Allen2', completed: true },
    { id: v4(), text: 'Allen3', completed: false },
    { id: v4(), text: 'Allen4', completed: false },
    { id: v4(), text: 'Allen5', completed: true },
]

export const fetchTodos = (filter) => {
    return delay(1000).then(() => {
        // if (Math.random() > 0.5) {
        //     throw new Error('blood boom');
        // }
        switch (filter) {
            case 'all':
                return mockData;
            case 'completed':
                return mockData.filter(todo => todo.completed)
            case 'active':
                return mockData.filter(todo => !todo.completed)
            default:
                throw new Error('unknow filter');
        }
    })
}

export const addTodo = (text) => {
    return delay(1000).then(() => {
        const todo = {
            id: v4(),
            text,
            completed: false
        }
        mockData.push(todo);
        return todo;
    })
}

export const toggleTodo = (id) => {
    return delay(1000).then(() => {
        const todo = mockData.find((todo) => todo.id == id);
        todo.completed = !todo.completed;
        return todo;
    })
}
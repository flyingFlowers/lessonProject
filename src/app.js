// import {createStore} from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

const createStore = (reducer) => {
    let state;
    let list = [];
    const getState = () => {
        return state;
    }

    const dispatch = (action) => {
        state = reducer(state, action);
        list.forEach((fn) => {
            fn();
        })
    }

    const subscribe = (fn) => {
        list.push(fn);
        return () => {
            list = list.filter(cb => cb !== fn);
        };     
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

const store = createStore(counter);
store.dispatch({
    type: 'INIT'
})

document.addEventListener('click', () => {
    store.dispatch({
        type: 'INCREASE'
    })
    unsubscribe1();
})

const render1 = () => {
    console.log('click event triggered!!!')
    // document.write('<h1>' + store.getState() + '</h1>');//会把事件清除掉！！！
    document.body.innerHTML = '<h1>' + store.getState() + '</h1>';
};

const render2 = () => {
    console.log('trigger render2');
}

var unsubscribe1 = store.subscribe(render1);
var unsubscribe2 = store.subscribe(render2);

render1();
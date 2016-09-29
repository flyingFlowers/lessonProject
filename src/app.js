import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

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

const store = createStore(counter);

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={() => {
                    store.dispatch({
                        type: 'DECREASE'
                    })
                }}>-</button>
                <button onClick={() => {
                    store.dispatch({
                        type: 'INCREASE'
                    })
                }}>+</button>
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <Counter/>,
        document.getElementById('root')
    )
}

render();

const unsubscribe = store.subscribe(render);
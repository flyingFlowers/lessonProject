import { createStore } from 'redux';
import { throttle } from 'lodash'; //执行某个函数时，规定固定时间才能执行一次

import { saveState, getState } from './localStorage.js';
import rootReducer from './reducers/index.js';

const addLoggerToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        console.log('-------------------');
        console.log('Current state', store.getState());
        console.log('Action:', action);
        const ret = rawDispatch(action);
        console.log('Next state:', store.getState());
        return ret;
    }
}

const configureStore = () => {
    let store = createStore(rootReducer);
    store.dispatch = addLoggerToDispatch(store);
    return store;
}
export default configureStore;

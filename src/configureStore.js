import { createStore } from 'redux';
import { throttle } from 'lodash'; //执行某个函数时，规定固定时间才能执行一次

import { saveState, getState } from './localStorage.js';
import rootReducer from './reducers/index.js';

const addLoggerToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {//在redux中dispatch执行完了之后，返回action
        console.log('-------------------');
        console.log('Current state', store.getState());
        console.log('Action:', action);
        const ret = rawDispatch(action);
        console.log('Next state:', store.getState());
        return ret;
    }
}

const addThunkToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        if(typeof(action) == 'function') {
            action(store.dispatch, store.getState);
        }else {
            rawDispatch(action);
        }
    }
}
const configureStore = () => {
    let store = createStore(rootReducer);
    store.dispatch = addLoggerToDispatch(store);
    store.dispatch = addThunkToDispatch(store);
    return store;
}
export default configureStore;

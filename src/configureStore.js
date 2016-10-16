import {createStore} from 'redux';
import {throttle} from 'lodash'; //执行某个函数时，规定固定时间才能执行一次

import {saveState, getState} from './localStorage.js';
import rootReducer from './reducers/index.js';
const mockData = getState();
let store = createStore(rootReducer, mockData);
store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000)); //1000ms才能执行一次

export default store;

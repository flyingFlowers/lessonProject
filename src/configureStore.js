import { createStore, applyMiddleware } from 'redux';
import { throttle } from 'lodash'; //执行某个函数时，规定固定时间才能执行一次
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { saveState, getState } from './localStorage.js';
import rootReducer from './reducers/index.js';

// const addLoggerToDispatch = (store) => {
//     const next = store.dispatch;
//     return (action) => {//在redux中dispatch执行完了之后，返回action
//         console.log('-------------------');
//         console.log('Current state', store.getState());
//         console.log('Action:', action);
//         const ret = next(action);
//         console.log('Next state:', store.getState());
//         return ret;
//     }
// }

// const addThunkToDispatch = (store) => {
//     const next = store.dispatch;
//     return (action) => {
//         if(typeof(action) == 'function') {
//             action(store.dispatch, store.getState);
//         }else {
//             next(action);
//         }
//     }
// }

// const wrapDispatch = (store, middlewares) => {
//     middlewares.forEach((middleware) => {
//         store.dispatch = middleware(store);
//     })
// }

const configureStore = () => {
    // wrapDispatch(store, middlewares);    
    // const middlewares = [addLoggerToDispatch, addThunkToDispatch];
    let store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));    
    return store;
}
export default configureStore;

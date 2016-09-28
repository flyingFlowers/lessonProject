function counter(state, action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default: 
            return state;
    }
}

console.log('current state is 0');
console.log('trigger INCREASE,current state is');
console.log(counter(0, {
    type: 'INCREASE'
}));
console.log('current state is 2');
console.log('trigger DECREASE,current state is');
console.log(counter(2, {
    type: 'DECREASE'
}))
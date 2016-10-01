// const visiableFilter = (state = "SHOW_ALL", action) => {
//     switch(action.type) {
//         case 'SET_VISIABLEFILTER':
//             return action.filter;
//         default: 
//             return state;
//     }
// }

const visiableFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SHOW_ALL': 
            return 'SHOW_ALL';
        case 'SHOW_COMPLETED':
            return 'SHOW_COMPLETED';
        case 'SHOW_ACTIVE':
            return 'SHOW_ACTIVE';
        default: 
            return state;
    }
}

export default visiableFilter;
const visiableFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SET_VISIABLEFILTER':
            return action.filter;
        default: 
            return state;
    }
}

export default visiableFilter;
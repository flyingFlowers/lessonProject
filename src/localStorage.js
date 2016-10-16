const saveState = (state) => {
    try {
        const data = JSON.stringify({
            todos: state.todos //只保存todos,忽略visiableFilter内容
        });
        localStorage.setItem('localState', data);
    } catch (err) {
        console.log(err);
    }

}

const getState = () => {
    try {
        const data = localStorage.getItem('localState');
        const state = JSON.parse(data);
        if (state == null) {
            return undefined;
        }
        return state;
    } catch (err) {
        return undefined;
    }

}

export {saveState, getState}
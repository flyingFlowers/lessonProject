import React, {Component} from 'react';

class AddTodo extends Component {
    componentDidMount() {
        const store = this.context.store;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const store = this.context.store;
        const handleClick = (value) => {
            store.dispatch({type: 'ADD_TODO', text: value})
        }
        return (
            <div>
                <input type="text" ref="_Inp"></input>
                <button
                    onClick={() => {
                    handleClick(this.refs._Inp.value);
                }}>ADD</button>
            </div>
        )
    }
}

AddTodo.contextTypes = {
    store: React.PropTypes.object
}
export default AddTodo;
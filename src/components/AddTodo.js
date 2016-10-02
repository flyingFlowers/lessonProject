import React, {Component} from 'react';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="_Inp"></input>
                <button onClick={() => {
                    this.props.handleClick(this.refs._Inp.value);
                }}>ADD</button>
            </div>    
        )
    }
}

export default AddTodo;
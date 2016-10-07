import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions/index.js';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="_Inp"></input>
                <button
                    onClick={() => {
                    this
                        .props
                        .handleClick(this.refs._Inp.value);
                }}>ADD</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (value) => {
            dispatch(addTodo(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
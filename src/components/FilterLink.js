import React, {Component} from 'react';

class FilterLink extends Component {
    render() {
        if(this.props.filter == this.props.currentFilter) {
            return (
                <span>{this.props.children}</span>
            )
        } 
        return (
            <a href="#" onClick={() => {
                this.props.handleClick();
            }}>{this.props.children}</a>
        )
    }
}

export default FilterLink;
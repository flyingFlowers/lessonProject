import React, {Component} from 'react';
import FilterLink from './FilterLink.js';

class Footer extends Component {
    render() {
        return (
            <div>
                 <FilterLink filter="SHOW_ALL" currentFilter={this.props.currentFilter} handleClick={() => {
                    this.props.handleClick('SHOW_ALL');
                } }>Show All</FilterLink>
                <FilterLink filter="SHOW_COMPLETED" currentFilter={this.props.currentFilter} handleClick={() => {
                    this.props.handleClick('SHOW_COMPLETED');                    
                } }>Show Completed</FilterLink>
                <FilterLink filter="SHOW_ACTIVE" currentFilter={this.props.currentFilter} handleClick={() => {
                    this.props.handleClick('SHOW_ACTIVE');                    
                } }>Show Active</FilterLink>
            </div>
        )
    }
}

export default Footer;
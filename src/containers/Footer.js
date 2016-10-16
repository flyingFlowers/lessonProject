import React, {Component} from 'react';
import {connect} from 'react-redux';

import FilterLink from '../components/FilterLink.js';
import {setVisiableFilter} from '../actions/index.js';

class Footer extends Component {
    render() {
        const currentFilter = this.props.visiableFilter;
        return (
            <div>
                <FilterLink
                    filter="all"
                    >Show All</FilterLink>
                <FilterLink
                    filter="completed"
                   >Show Completed</FilterLink>
                <FilterLink
                    filter="active"
                   >Show Active</FilterLink>
            </div>
        )
    }
}

export default Footer;
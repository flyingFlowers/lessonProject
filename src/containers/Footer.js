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
                    filter="SHOW_ALL"
                    currentFilter={currentFilter}
                    handleClick={() => {
                    this
                        .props
                        .handleClick('SHOW_ALL');
                }}>Show All</FilterLink>
                <FilterLink
                    filter="SHOW_COMPLETED"
                    currentFilter={currentFilter}
                    handleClick={() => {
                    this
                        .props
                        .handleClick('SHOW_COMPLETED');
                }}>Show Completed</FilterLink>
                <FilterLink
                    filter="SHOW_ACTIVE"
                    currentFilter={currentFilter}
                    handleClick={() => {
                    this
                        .props
                        .handleClick('SHOW_ACTIVE');
                }}>Show Active</FilterLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {visiableFilter: state.visiableFilter}
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (filter) => {
            dispatch(setVisiableFilter(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
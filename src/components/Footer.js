import React, {Component} from 'react';
import FilterLink from './FilterLink.js';

class Footer extends Component {
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
        const state = store.getState();
        const {todos, visiableFilter} = state;
        const currentFilter = visiableFilter;
        const handleClick = (filter) => {
            store.dispatch({type: 'SET_VISIABLEFILTER', filter})
        }

        return (
            <div>
                <FilterLink
                    filter="SHOW_ALL"
                    currentFilter={currentFilter}
                    handleClick={() => {
                    handleClick('SHOW_ALL');
                }}>Show All</FilterLink>
                <FilterLink
                    filter="SHOW_COMPLETED"
                    currentFilter={currentFilter}
                    handleClick={() => {
                    handleClick('SHOW_COMPLETED');
                }}>Show Completed</FilterLink>
                <FilterLink
                    filter="SHOW_ACTIVE"
                    currentFilter={currentFilter}
                    handleClick={() => {
                    handleClick('SHOW_ACTIVE');
                }}>Show Active</FilterLink>
            </div>
        )
    }
}

Footer.contextTypes = {
    store: React.PropTypes.object
}
export default Footer;
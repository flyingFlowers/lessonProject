import React, {Component} from 'react';
import {Link} from 'react-router';

const FilterLink = ({children, filter}) => (
    <Link
        to={filter == 'all'
        ? '/'
        : filter}
        activeStyle={{
        color: '#000',
        textDecoration: 'none'
    }}>{children}</Link>
)

// class FilterLink extends Component {
//     render() {
//         if (this.props.filter == this.props.currentFilter) {
//             return (
//                 <span>{this.props.children}</span>
//             )
//         }
//         return (
//             <a
//                 href="#"
//                 onClick={() => {
//                 this
//                     .props
//                     .handleClick();
//             }}>{this.props.children}</a>
//         )
//     }
// }

export default FilterLink;
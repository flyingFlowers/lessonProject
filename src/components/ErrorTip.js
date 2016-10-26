import React, {Component} from 'react';

const ErrorTip = ({message, onRetry}) => {
    return (
        <div>
            <p>some error happen: {message}</p>
            <button onClick={onRetry}>Click retry</button>
        </div>
    )    
}

export default ErrorTip;
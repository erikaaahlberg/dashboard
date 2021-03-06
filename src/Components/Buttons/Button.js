import React from 'react';
import './Buttons.css';

const Button = (props) => {
    return (
        <button id = { props.id } className = { props.styleClass } onClick = { props.event }>
            { props.buttonText }
        </button>
    )
}

export default Button;
import React from 'react';
import Button from '../Buttons/Button';
import './Input.css';

const InputField = (props) => {
    return (
        <form id = { props.id }>
            { props.children }
        </form>
        )
}

export default InputField;
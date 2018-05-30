import React from 'react';

const Textarea = (props) => {
    return (
        <textarea id = { props.id } cols = { props.cols } rows = { props.rows } placeholder = { props.placeholder }/>
    )
}

export default Textarea;
import React from 'react';
import Button from '../Buttons/Button';

const InputField = (props) => {
    return (
        <form id = { props.formId }>
            <textarea id = { props.inputFieldId }>
            </textarea>
            <Button id = { props.buttonId } styleClass = "button button-submit" event = { props.event } buttonText = { props.buttonText }/>
        </form>
        )
}

export default InputField;
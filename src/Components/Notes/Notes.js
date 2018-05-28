import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import Button from '../Buttons/Button';
import InputField from '../InputField/InputField';

class Notes extends Component {
    state = {
        notes: ''
      }

    submitInput = () => {
        const input = document.getElementById("notesInput").value;
        this.setState({ notes: input });
    }
    
    render () {
        return (
            <Div column = "col-md-5" styleClass = "wrapper wrapper-notes" id = "notesWrapper">
                <InputField formId = "notesForm" inputFieldId = "notesInput" buttonId = "notesSubmitButton" buttonText = "Submit" event = { this.submitInput }/>
            </Div>
        )
    }
}

export default Notes;
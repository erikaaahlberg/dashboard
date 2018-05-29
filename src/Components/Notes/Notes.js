import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import H1 from '../Header/H1';
import Button from '../Buttons/Button';
import Form from '../Input/Form';
import Textarea from '../Input/Textarea';
import { removeFromLocalStorage } from '../../api';

class Notes extends Component {
    state = {
        notes: ''
    }

    componentDidMount () {
        //this.removeFromLocalStorage();
        const notes = this.getFromLocalStorage();
        this.setState({ notes: notes });
    }

    submitInput = () => {
        const input = document.getElementById("notesInput").value;
        const notesTotal = this.addNotes(input);
        this.setState({ notes: notesTotal });
        this.saveInLocalStorage(notesTotal);
    }

    addNotes = (notes) => {
        let notesTotal = '';
        if (this.state.notes && this.state.notes != '') {
            notesTotal = this.state.notes + '\n' + notes;
        }
        else {
            notesTotal = notes;
        }
        return notesTotal;
    }

    saveInLocalStorage = (notes) => {
        localStorage.setItem('notes', notes);
    }

    getFromLocalStorage = () => {
        return localStorage.getItem('notes');
    }
    
    render () {
        let notes = this.state.notes;
        return (
            <Div column = "col-md-5" styleClass = "wrapper wrapper-notes" id = "notesWrapper">
                <H1 title = "Notes"/>
                <article className = "">{ notes }</article>
                <Form id = "notesForm">
                    <Textarea id = "notesInput" cols = "20" rows = "10" placeholder = "Add your notes here..."/>
                    <Button id = "notesSubmitButton" styleClass = "button button-submit" event = { this.submitInput } buttonText = "Submit"/>
                </Form>
            </Div>
        )
    }
}

export default Notes;
import React from 'react';
import ListItems from './ListItems';

const List = (props) => {
    return (
        <ul id = { props.listId } className = { props.styleClass }>
            <ListItems object = { props.listObject } listTitles = { props.listArray }/>
        </ul>
        )
}

export default List;
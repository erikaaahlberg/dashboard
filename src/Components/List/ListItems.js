import React from 'react';

const ListItems = (props) => {
    let listItems = [];
    Object.keys( props.object ).map(( item, index ) => {
        listItems.push(
            <li key = { index } > <span className = "listTitle">{ props.listTitles[index] }:</span> { props.object[item] } </li>
        )
    })
    return listItems;
}

export default ListItems;
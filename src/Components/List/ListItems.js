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
/*
class ListItems extends Component {
    
    elements = array.map((item, index ) => {
        return <li key = { index } > { item } </li>;
    });
    render () {
        return(

        )
    }


}
*/
export default ListItems;
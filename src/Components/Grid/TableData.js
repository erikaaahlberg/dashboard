import React from 'react';

const TableData = (props) => {
    return (
        <td id = { props.id }>
          { props.data }
        </td>
    )
}

export default TableData;
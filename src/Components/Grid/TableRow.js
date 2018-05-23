import React from 'react';

const TableRow = (props) => {
    return(
      <tr id = { props.id }>
        { props.children }
      </tr>
    );
}
  
export default TableRow;
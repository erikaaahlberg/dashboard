import React from 'react';

const Table = (props) => {
    return (
      <table className = "table" id = { props.id }>
        { props.children }
      </table>
    );
}
  
export default Table;
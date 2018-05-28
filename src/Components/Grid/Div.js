import React from 'react';
import './Grid.css';

const Div = (props) => {
    return(
      <div className = { props.column } id = { props.id }>
        { props.children }
      </div>
    )
}
  
export default Div;
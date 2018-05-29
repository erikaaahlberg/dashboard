import React from 'react';
import './Header.css';

const H3 = (props) => {
  return(
    <header>
        <h3>
            { props.title }
        </h3>
    </header>
  )
}

export default H3;
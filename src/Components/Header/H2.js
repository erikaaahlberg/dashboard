import React from 'react';
import './Header.css';

const H2 = (props) => {
  return(
    <header>
        <h2>
            { props.title }
        </h2>
    </header>
  )
}

export default H2;
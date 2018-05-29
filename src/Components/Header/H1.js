import React from 'react';
import './Header.css';

const H1 = (props) => {
  return(
    <header>
      <h1>
        { props.title }
      </h1>
    </header>
  )
}

export default H1;